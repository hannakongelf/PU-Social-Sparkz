'use server';

import { db } from '@/db';
import * as paths from '@/paths';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

interface DeleteGameFormState {
  errors: {
    _form?: string[];
  };
}

export async function deleteGame(
  id: number,
  formState: DeleteGameFormState,
  formData: FormData
): Promise<DeleteGameFormState> {
  try {
    db.game.delete({
      where: {
        id,
      },
    });
  } catch (err: unknown) {
    if (err instanceof Error) {
      return {
        errors: {
          _form: [err.message],
        },
      };
    }
    return {
      errors: {
        _form: ['Something went wrong.'],
      },
    };
  }

  revalidatePath(paths.admin());
  redirect(paths.admin());
}
