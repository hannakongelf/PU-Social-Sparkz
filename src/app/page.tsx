'use server';

import { GameWithReviews, getAllGames } from '@/db/queries';
import ListContent from '@/components/list-content';

export default async function Home() {
  const games: GameWithReviews[] = await getAllGames();

  return (
    <main>
      <ListContent games={games} />
    </main>
  );
}
