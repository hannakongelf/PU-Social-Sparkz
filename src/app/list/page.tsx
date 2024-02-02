'use server';
import { Game, User } from "@prisma/client";
import ListCard from "../../Components/ListCard";
import { getAllGames } from "../../actions/game";

export async function loader() {
  const games = await getAllGames();
  return ({ games });
}



export default async function Home({ games }: { games: Game[] }) {

  return (
    <main>
      {games.map((game) => (
        <ListCard key={game.id} game={game} />
      ))}
      <h1>Social Sparkz</h1>
    </main>
  );
}

