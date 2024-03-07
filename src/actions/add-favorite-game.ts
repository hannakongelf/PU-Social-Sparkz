"use server";

import { auth } from "@/auth";
import { db } from "@/db";
import { gameType } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import * as paths from "@/paths";

export async function addFavoriteGame(gameId: number) {
  const session = await auth();
  if (!session || !session.user) return;
  try {
    await db.favorite.upsert({
      where: {
        userId: session.user.id,
      },
      update: {
        games: {
          connect: {
            id: gameId,
          },
        },
      },
      create: {
        userId: session.user.id,
        games: {
          connect: {
            id: gameId,
          },
        },
      },
    });
  } catch {}
}
