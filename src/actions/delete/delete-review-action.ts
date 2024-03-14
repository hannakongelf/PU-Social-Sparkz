'use server';

import { db } from '@/db';
import * as paths from '@/paths';
import { revalidatePath } from 'next/cache';

export async function deleteReview(
  id: number,
) {
  try {
    await db.review.delete({
      where: {
        id: id,
      },
    });
  } catch (err: unknown){};
  revalidatePath(paths.admin());
}
