"use server";

import Countdown from "@/components/toolbox/countdown";
import SpinTheWheel from "@/components/toolbox/spin-the-wheel";
import { getAllGamesNoReview } from "@/db/queries/game";
import { Game } from "@prisma/client";

export default async function Home() {
  const games: Game[] = await getAllGamesNoReview();

  return (
    <main className="flex flex-col justify-center items-center">
      <SpinTheWheel games={games} />
      <Countdown />
    </main>
  );
}
