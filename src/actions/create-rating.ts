'use server';

import { auth } from '@/auth';
import { db } from '@/db';
import { gamePath } from '@/paths';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from 'zod';

const ratingSchema = z.object({
  description: z.string().optional(),
  rating: z.number().int().gte(1).lte(5),
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

  revalidatePath(gamePath(gameId));
  redirect(gamePath(gameId));
}
