"use server";

import ListCard from "@/components/list-card";
import Grid from "@/components/common/grid";
import { GameWithReviews, getAllGames } from "@/db/queries/game";
import { Game } from "@prisma/client";
import { TextField } from "@mui/material";
import ListContent from "@/components/list-content";

export default async function Home() {
  const games: GameWithReviews[] = await getAllGames();

  return (
    <main>
      <h1 className="text-4xl my-4">Leker</h1>
      <ListContent games={games} />
    </main>
  );
}
