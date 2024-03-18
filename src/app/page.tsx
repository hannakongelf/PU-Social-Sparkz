"use server";

import {
  type GameWithReviews,
  getAllGamesWithReview,
  getAllFavoritesGameId,
} from "@/db/queries";
import ListContent from "@/components/list-content";
import { auth } from "@/auth";

export default async function Home() {
  const games: GameWithReviews[] = await getAllGamesWithReview();
  const session = await auth();
  const favorite = await getAllFavoritesGameId(session?.user?.id ?? "");

  return (
    <main>
      <ListContent games={games} favorite={favorite} />
    </main>
  );
}
