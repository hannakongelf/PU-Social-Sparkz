'use server';

import { db } from '@/db';
import * as paths from '@/paths';
import { revalidatePath } from 'next/cache';

export async function deleteReport(
  id: string,
) {
  try {
    await db.report.delete({
      where: {
        id: id,
      },
    });
  } catch (err: unknown){};
  revalidatePath(paths.admin());
}
