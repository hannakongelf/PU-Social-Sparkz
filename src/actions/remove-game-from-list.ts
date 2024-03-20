import { db } from '@/db';
import * as paths from '@/paths';
import { revalidatePath } from 'next/cache';

export async function removeGameFromList(gameId: number, queueId: string) {
  try {
    await db.queueOnGame.delete({
      where: {
        id: {
          gameId,
          queueId,
        },
      },
    });
  } catch (err) {}
  revalidatePath(paths.personalList(queueId));
}
