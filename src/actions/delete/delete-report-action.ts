'use server';

import { auth } from '@/auth';
import { db } from '@/db';
import * as paths from '@/paths';
import { revalidatePath } from 'next/cache';

export async function deleteReport(id: string) {
  try {
    const session = await auth();
    if (!session || !session.user?.admin)
      throw new Error('You must be an admin to delete a report.');
    await db.report.delete({
      where: {
        id: id,
      },
    });
  } catch (err: unknown) {}
  revalidatePath(paths.admin());
}
