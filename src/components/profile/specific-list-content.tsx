"use client";

import PersonalListCard from "./show-personal-lists-template";
import Paper from "@mui/material/Paper";
import { QueueWithGames } from "@/db/queries";
import { Game } from "@prisma/client";
import SpecificListGameCard from "./specific-list-template";
import { useRouter } from "next/router";
import { getGamesInList } from "@/db/queries/personal-lists";

export default async function SpecificListContent({}: //specificList,
{
  //specificList: QueueWithGames;
}) {
  //if (!specificList) return null;

  const router = useRouter();
  const { listId } = router.query;
  const games: Game[] = await getGamesInList(listId as string);
  if (!games) return null;

  return (
    <div>
      <Paper
        elevation={1}
        className="pt-1 pb-1 pr-6 pl-6 mb-8 mt-10  flex justify-between"
      ></Paper>

      <div className="grid grid-cols-5 gap-5">
        {games.map((g) => (
          <SpecificListGameCard specificGame={g} key={g.id} />
        ))}
      </div>
    </div>
  );
}
