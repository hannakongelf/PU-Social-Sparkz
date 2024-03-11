"use server";

import { auth } from "@/auth";
import { db } from "@/db";

export async function removeFavoriteGame(gameId: number) {
  const session = await auth();
  if (!session || !session.user) return;
  try {
    await db.favorite.update({
      where: {
        userId: session.user.id,
      },
      data: {
        games: {
          disconnect: {
            id: gameId,
          },
        },
      },
    });
  } catch {}
}
