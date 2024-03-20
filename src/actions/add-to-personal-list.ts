'use server';

import { auth } from '@/auth';
import { db } from '@/db';
import * as paths from '@/paths';
import { revalidatePath } from 'next/cache';

export async function addToPersonalList(gameId: number, queueId: string) {
  const session = await auth();
  if (!session || !session.user)
    throw new Error('You must be logged in to add game to a list.');
  try {
    await db.queue.update({
      where: {
        id: queueId,
      },
      data: {
        queueContainsGame: {
          create: {
            gameId,
          },
        },
      },
    });
  } catch {}

  revalidatePath(paths.gamePath(gameId));
  revalidatePath(paths.personalList());
}
