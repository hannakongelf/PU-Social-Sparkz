"use server";

import ListCard from "@/components/list-card";
import { getGamesInList, getListNameById } from "@/db/queries/personal-lists";
import Paper from "@mui/material/Paper";
import { Game, Queue } from "@prisma/client";

export default async function Page({
  params: { id },
}: {
  params: { id: string };
}) {
  const games: Game[] = await getGamesInList(id);
  const list: Queue = await getListNameById(id);

  return (
    <main className="flex flex-col content-center">
      {games ? (
        <>
          <h1>Your list - {list?.name}</h1>

          <Paper
            elevation={1}
            className="pt-1 pb-1 pr-6 pl-6 mb-8 mt-10  flex justify-between"
          >
            <div className="grid grid-cols-5 gap-5">
              {games.map((game) => (
                <ListCard key={game.id} game={game} favorite={"not needed"} />
              ))}
            </div>
          </Paper>
        </>
      ) : (
        <p>List not found.</p>
      )}
    </main>
  );
}
