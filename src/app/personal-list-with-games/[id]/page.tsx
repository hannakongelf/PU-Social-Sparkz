"use server";

import {
  GameWithReviews,
  getAllGames,
  getPersonalListById,
} from "@/db/queries";
import ListContent from "@/components/list-content";
import { getAllFavoritesGames } from "@/db/queries/favorite";
import { auth } from "@/auth";
import { Game } from "@prisma/client";
import { getGamesInList } from "@/db/queries/personal-lists";
import SpecificListContent from "@/components/profile/specific-list-content";

export default async function PersonalList({}: //chosenList: { id },
{
  //chosenList: { id: string };
}) {
  const session = await auth();
  //const favorite = await getAllFavoritesGames(session?.user?.id ?? "");
  //const games: Game[] = await getGamesInList(id);

  return (
    <main>
      <SpecificListContent /*games={games} favorite={favorite}*/ />
    </main>
  );
}
