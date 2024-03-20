'use server';

import { auth } from '@/auth';
import { db } from '@/db';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from 'zod';
import * as paths from '@/paths';

const createPersonalListSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'Name must be longer than one character.' }),
});

interface CreatePersonalListState {
  errors: {
    name?: string[];
    _form?: string[];
  };
}

export async function createPersonalList(
  gameId: number,
  formState: CreatePersonalListState,
  formData: FormData
): Promise<CreatePersonalListState> {
  const session = await auth();
  if (!session || !session.user)
    return {
      errors: {
        _form: ['You must be signed in to create a new game.'],
      },
    };

  const result = createPersonalListSchema.safeParse({
    name: formData.get('name'),
  });

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  try {
    await db.queue.create({
      data: {
        name: result.data.name,
        userId: session.user.id,
        queueContainsGame: {
          create: {
            gameId,
          },
        },
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
  revalidatePath(paths.profile());
  revalidatePath(paths.personalList());
  redirect(paths.personalList());
}
