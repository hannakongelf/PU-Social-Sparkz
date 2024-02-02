"use server";
import { Game } from "@prisma/client";
import ListCard from "../../../Components/ListCard";
import { getGameById } from "../../../actions/game";

interface LoaderParams {
  params: {
    id: string;
  };
}

interface DetailPageProps {
  data: {
    game: Game | null;
  };
}

export async function loader({ params }: LoaderParams) {
  const id = parseInt(params.id, 10);
  const game = await getGameById(id);
  return {game};
}

export default async function DetailPage({ data }: DetailPageProps) {
  const { game } = data;

  return (
    <main className="flex content-center">
      {game ? <ListCard key={game.id.toString()} game={game} /> : <p>Game not found.</p>}
    </main>
  );
}