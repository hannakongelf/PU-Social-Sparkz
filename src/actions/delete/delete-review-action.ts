'use server';

import { auth } from '@/auth';
import { db } from '@/db';
import * as paths from '@/paths';
import { revalidatePath } from 'next/cache';

export async function deleteReview(id: number) {
  const session = await auth();
  if (!session || !session.user?.admin)
    throw new Error('You must be an admin to delete a review.');
  try {
    const review = await db.review.delete({
      where: {
        id: id,
      },
    });
    revalidatePath(paths.gamePath(review.gameId));
  } catch (err: unknown) {}
  revalidatePath(paths.admin());
}
