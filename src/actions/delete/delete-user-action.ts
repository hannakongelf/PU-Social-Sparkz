'use server';

import { auth } from '@/auth';
import { db } from '@/db';
import * as paths from '@/paths';
import { revalidatePath } from 'next/cache';

export async function deleteUser(id: string) {
  const session = await auth();
  try {
    await db.user.delete({
      where: {
        id: id,
      },
    });
  } catch (err: unknown) {}
  revalidatePath(paths.admin());
}
