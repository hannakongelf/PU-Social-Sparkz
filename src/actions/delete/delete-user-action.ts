'use server';

import { auth } from '@/auth';
import { db } from '@/db';
import * as paths from '@/paths';
import { revalidatePath } from 'next/cache';

export async function deleteUser(id: string) {
  const session = await auth();
  if (!session || !session.user?.admin)
    throw new Error('You must be an admin to delete a user.');
  try {
    const user = await db.user.findUnique({
      where: {
        id,
      },
    });
    if (user?.admin) throw new Error('You cant delete an admin user.');
    await db.user.delete({
      where: {
        id: id,
      },
    });
  } catch (err: unknown) {}
  revalidatePath(paths.admin());
}
