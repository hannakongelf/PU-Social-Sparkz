"use server";

import {
  type GameWithReviews,
  getAllGamesWithReview,
  getAllFavoritesGames,
} from "@/db/queries";
import ListContent from "@/components/list-content";
import { auth } from "@/auth";

export default async function Home() {
  const games: GameWithReviews[] = await getAllGamesWithReview();
  const session = await auth();
  const favorite = await getAllFavoritesGames(session?.user?.id ?? "");

  return (
    <main>
      <ListContent games={games} favorite={favorite} />
    </main>
  );
}
