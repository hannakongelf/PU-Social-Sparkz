'use server';

import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import { z } from 'zod';
import * as paths from '@/paths';
import { db } from '@/db';
import { reportType } from '@prisma/client';

const createReportSchema = z.object({
  report: z.string().min(10),
});

interface CreateReportFormState {
  errors: {
    _form?: string[];
    report?: string[];
  };
}

export async function createReport(
  reportId: number,
  type: reportType,
  formState: CreateReportFormState,
  formData: FormData
): Promise<CreateReportFormState> {
  const session = await auth();
  if (!session || !session.user) {
    return {
      errors: {
        _form: ['You must be signed in to send a report.'],
      },
    };
  }

  const result = createReportSchema.safeParse({
    report: formData.get('report'),
  });

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  try {
    await db.report.create({
      data: {
        userId: session.user.id,
        description: result.data.report,
        reportId,
        contentType: type,
      },
    });
  } catch (err: unknown) {
    if (err instanceof Error) {
      return {
        errors: {
          _form: [err.message],
        },
      };
    } else {
      return {
        errors: {
          _form: ['Something went wrong.'],
        },
      };
    }
  }

  redirect(paths.home());
}
