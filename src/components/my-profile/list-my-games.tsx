"use client";

import { getGamesByAuthor } from "@/db/queries/game";
import { Game, gameType } from "@prisma/client";
import { useSession } from "next-auth/react";
import MyGameCard from "./my-game-card";

export default async function ListMyGames({ games }: { games: Game[] }) {
  return (
    <div className="grid grid-cols-5 gap-5">
      {games.map((g) => (
        <MyGameCard game={g} key={g.id} />
      ))}
    </div>
  );
}
