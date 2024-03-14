'use server';

import { auth } from '@/auth';
import { db } from '@/db';
import { revalidatePath } from 'next/cache';
import * as paths from '@/paths';

export async function removeFavoriteGame(gameId: number) {
  const session = await auth();
  if (!session || !session.user) return;
  try {
    await db.favorite.update({
      where: {
        userId: session.user.id,
      },
      data: {
        games: {
          disconnect: {
            id: gameId,
          },
        },
      },
    });
  } catch {}

  revalidatePath(paths.gamePath(gameId));
  revalidatePath(paths.home());
}
