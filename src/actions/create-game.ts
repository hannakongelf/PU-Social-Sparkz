'use server';

import { auth } from '@/auth';
import { db } from '@/db';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from 'zod';

const createGameSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'Name must be longer than one character.' }),
  description: z
    .string()
    .min(50, { message: 'Description must be longer than 50 characters.' }),
  category: z.enum(['CARD', 'DICE', 'PHONE', 'OTHER']),
  playerMax: z.number().optional(),
  playerMin: z.number().optional(),
  image: z.string().optional(),
});

interface CreateGameFormState {
  errors: {
    name?: string[];
    description?: string[];
    category?: string[];
    playerMax?: string[];
    playerMin?: string[];
    image?: string[];
    _form?: string[];
  };
}

export async function createGame(
  formState: CreateGameFormState,
  formData: FormData
): Promise<CreateGameFormState> {
  const session = await auth();
  if (!session || !session.user)
    return {
      errors: {
        _form: ['You must be signed in to create a new game.'],
      },
    };

  const result = createGameSchema.safeParse({
    name: formData.get('name'),
    description: formData.get('description'),
    category: formData.get('category'),
    playerMax: Number(formData.get('maxplayers')),
    playerMin: Number(formData.get('minplayers')),
    image: formData.get('pic'),
  });
  if (!result.success) {
    console.log(result);
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  let newGame;
  try {
    newGame = await db.game.create({
      data: {
        name: result.data.name,
        description: result.data.description,
        type: result.data.category,
        image: result.data.image,
        playerMax: result.data.playerMax,
        playerMin: result.data.playerMin,
        userId: session.user.id,
      },
    });
  } catch (err: unknown) {
    if (err instanceof Error)
      return {
        errors: {
          _form: [err.message],
        },
      };
    else
      return {
        errors: {
          _form: ['Something went wrong.'],
        },
      };
  }
  revalidatePath('/');
  redirect(`/detail/${newGame.id}`);
}
