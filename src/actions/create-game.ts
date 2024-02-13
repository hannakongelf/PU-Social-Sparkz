'use server';

import { auth } from '@/auth';
import { db } from '@/db';
import { redirect } from 'next/navigation';
import { z } from 'zod';
import { gameType } from '@prisma/client';

const createGameSchema = z.object({
  name: z.string(),
  description: z.string().min(150),
  type: z.enum([GAME_CATEGORIES]),
});

interface CreateGameFormState {
  errors: {
    name?: string[];
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
        _form: ['You must be signed in to create e new game.'],
      },
    };

  const result = createGameSchema.safeParse({
    name: formData.get('name'),
    description: formData.get('description'),
    type: formData.get('type'),
  });

  if (!result.success)
    return {
      errors: result.error.flatten().fieldErrors,
    };

  try {
    await db.game.create({
      data: {
        name: result.data.name,
        description: result.data.description,
        type: result.data.type,
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
