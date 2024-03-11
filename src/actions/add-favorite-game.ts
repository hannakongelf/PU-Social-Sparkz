"use server";

import { auth } from "@/auth";
import { db } from "@/db";

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
