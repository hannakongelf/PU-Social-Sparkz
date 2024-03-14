'use server';

import { db } from '@/db';
import * as paths from '@/paths';
import { revalidatePath } from 'next/cache';

export async function deleteGame(id: number) {
  console.log(id);
  try {
    console.log('try');
    db.game.delete({
      where: {
        id,
      },
    });
  } catch (err: unknown) {
    console.log('nope');
  }

  revalidatePath(paths.admin());
}
