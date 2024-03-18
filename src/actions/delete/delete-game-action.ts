'use server';

import { auth } from '@/auth';
import { db } from '@/db';
import * as paths from '@/paths';
import { revalidatePath } from 'next/cache';

export async function deleteGame(id: number) {
  const session = await auth();
  if (!session || !session.user?.admin)
    throw new Error('You must be an admin to delete a game.');
  try {
    await db.game.delete({
      where: {
        id: id,
      },
    });
  } catch (err: unknown) {}
  revalidatePath(paths.admin());
}
