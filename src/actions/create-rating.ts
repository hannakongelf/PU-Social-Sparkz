'use server';

import { auth } from '@/auth';
import { db } from '@/db';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from 'zod';
import * as paths from '@/paths';

const ratingSchema = z.object({
  description: z.string().optional(),
  rating: z
    .number()
    .int()
    .gte(1, { message: 'Rating value is required.' })
    .lte(5),
});

interface CreateRatingFormState {
  errors: {
    description?: string[];
    rating?: string[];
    _form?: string[];
  };
}

export async function createRating(
  gameId: number,
  formState: CreateRatingFormState,
  formData: FormData
): Promise<CreateRatingFormState> {
  const session = await auth();
  if (!session || !session.user)
    return {
      errors: {
        _form: ['You must be signed in to give a review.'],
      },
    };
  const result = ratingSchema.safeParse({
    description: formData.get('description'),
    rating: Number(formData.get('rating')),
  });

  if (!result.success) {
    console.log(result.error.flatten());
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  try {
    await db.review.create({
      data: {
        description: result.data.description,
        rating: result.data.rating,
        userId: session.user.id,
        gameId: gameId,
      },
    });
  } catch (err: unknown) {
    console.log(err);
    if (err instanceof Error) {
      return {
        errors: {
          _form: [err.message],
        },
      };
    } else {
      return {
        errors: {
          _form: ['Something went wrong.'],
        },
      };
    }
  }

  revalidatePath(paths.gamePath(gameId));
  redirect(paths.gamePath(gameId));
}
