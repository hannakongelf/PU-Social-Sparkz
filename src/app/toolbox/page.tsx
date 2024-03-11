"use server";

import SpinTheWheel from "@/components/toolbox/spin-the-wheel";
import { GameWithReviews, getAllGames } from "@/db/queries";

export default async function Home() {
  const games: GameWithReviews[] = await getAllGames();

  return (
    <main className="flex justify-center items-center">
      <SpinTheWheel games={games} />
    </main>
  );
}
