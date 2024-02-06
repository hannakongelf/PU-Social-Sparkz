"use server";
import { Game, User } from "@prisma/client";
import ListCard from "../Components/ListCard";
import { getAllGames } from "../actions/game";

export default async function Home() {
  const games = await getAllGames();

  return (
    <main className="flex content-center">
      {games.map((game) => (
        <ListCard key={game.id} game={game} />
      ))}
    </main>
  );
}
