"use server";

import { auth } from "@/auth";
import { db } from "@/db";
import * as paths from "@/paths";
import { revalidatePath } from "next/cache";

export async function addToPersonalList(gameId: number, queueId: string) {
  const session = await auth();
  if (!session || !session.user) return;
  try {
    await db.queueOnGame.create({
      data: {
        gameId,
        queueId,
      },
    });
  } catch {}

  revalidatePath(paths.gamePath(gameId));
  revalidatePath(paths.home());
}
