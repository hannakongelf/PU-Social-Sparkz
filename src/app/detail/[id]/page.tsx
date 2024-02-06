"use server";
import { Game } from "@prisma/client";
import ListCard from "../../../Components/ListCard";
import { getGameById } from "../../../actions/game";

export default async function Page({
  params: { id },
}: {
  params: { id: string };
}) {
  const game = await getGameById(parseInt(id));

  return (
    <main className="flex content-center">
      {game ? (
        <ListCard key={game.id.toString()} game={game} />
      ) : (
        <p>Game not found.</p>
      )}
      Detail page.
    </main>
  );
}
