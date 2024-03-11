'use server';

import { auth } from '@/auth';
import { db } from '@/db';
import * as paths from '@/paths';
import { revalidatePath } from 'next/cache';

export async function addFavoriteGame(gameId: number) {
  const session = await auth();
  if (!session || !session.user) return;
  try {
    await db.favorite.upsert({
      where: {
        userId: session.user.id,
      },
      update: {
        games: {
          connect: {
            id: gameId,
          },
        },
      },
      create: {
        userId: session.user.id,
        games: {
          connect: {
            id: gameId,
          },
        },
      },
    });
  } catch {}

  revalidatePath(paths.gamePath(gameId));
  revalidatePath(paths.home());
}
