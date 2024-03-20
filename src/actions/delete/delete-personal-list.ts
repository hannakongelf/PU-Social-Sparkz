'use server';

import { auth } from '@/auth';
import { db } from '@/db';
import { revalidatePath } from 'next/cache';
import * as paths from '@/paths';

export async function deletePersonalList(id: string) {
  const session = await auth();
  if (!session || !session.user) return;
  try {
    const author = await db.queue.findUnique({
      where: {
        id,
      },
      select: {
        userId: true,
      },
    });
    if (!author || author.userId !== session.user.id) return;
    await db.queue.delete({
      where: {
        id,
      },
    });
  } catch {}
  revalidatePath(paths.personalList());
  revalidatePath(paths.profile());
}
