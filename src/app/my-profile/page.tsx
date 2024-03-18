"use server";

import * as React from "react";
import {
  GameWithReviews,
  getAllGames,
  getGameById,
  getReviewsByGame,
} from "@/db/queries";
import ListContent from "@/components/list-content";
import UserInfoBox from "@/components/my-profile/user-info-box";
import { useSession } from "next-auth/react";
import { Game, gameType } from "@prisma/client";
import { getGamesByAuthor } from "@/db/queries/game";
import ListMyGames from "@/components/my-profile/list-my-games";
import { auth } from "@/auth";

export default async function Page() {
  const session = await auth();
  const games: Game[] = await getGamesByAuthor(session?.user?.id ?? "1");

  return (
    <main className="flex justify-center items-center">
      <UserInfoBox games={games} user={session?.user} />
    </main>
  );
}
