"use server";

import { auth } from "@/auth";
import PersonalListContent from "@/components/profile/show-personal-lists-content";
import PersonalListCard from "@/components/profile/show-personal-lists-template";
import { QueueWithGames, getAllPersonalLists } from "@/db/queries";
import { getAllFavoritesGames } from "@/db/queries/favorite";
import { getPersonalListWithGames } from "@/db/queries/personal-lists";

export default async function PersonalLists() {
  const session = await auth();
  if (!session || !session.user) return null;
  const personalLists = await getPersonalListWithGames(session.user.id);
  const favoriteList = await getAllFavoritesGames(session.user.id);
  if (!favoriteList) throw new Error("No favorite list found");

  return (
    <main>
      <PersonalListCard personalList={{ ...favoriteList, name: "Favorites" }} />
      {personalLists && <PersonalListContent personalLists={personalLists} />}
    </main>
  );
}
