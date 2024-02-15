'use server';

import { auth } from '@/auth';
import { db } from '@/db';
import { redirect } from 'next/navigation';
import { z } from 'zod';

const createGameSchema = z.object({
  name: z.string().min(2, {message:"Name must contain at least two characters"}),
  description: z.string().min(50),
  category: z.enum(['CARD', 'DICE', 'PHONE', 'OTHER']),
  playerMax: z.number().min(2).optional(),
  playerMin: z.number().min(2).optional(),
  image: z.string().min(5).optional(),
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
    category: formData.get('gcategory'),
    playerMax: formData.get('maxplayers'),
    playerMin: formData.get('minplayers'),
    image: formData.get('pic'),
  });

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  try {
    await db.game.create({
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

  redirect('/');
}
