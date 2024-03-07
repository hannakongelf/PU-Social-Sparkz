'use server';

import { auth } from '@/auth';
import { db } from '@/db';
import { gameType } from '@prisma/client';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from 'zod';
import * as paths from '@/paths';

