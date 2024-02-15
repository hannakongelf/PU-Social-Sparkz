"use server";
import { Game } from "@prisma/client";
import ListCard from "../../../components/list-card";
import { getGameById } from "../../../db/queries/game";
import GameContent from "@/components/game-content";

export default async function Page({
  params: { id },
}: {
  params: { id: string };
}) {
  const game = await getGameById(parseInt(id));

  return (
    <>
    <h1>{game?.name}</h1>
    <main className="flex content-center">
      {game ? (
        <GameContent key={game.id.toString()} game={game} />
      ) : (
        <p>Game not found.</p>
      )}
    </main>
    </>
  );
}
