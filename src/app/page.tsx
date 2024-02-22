'use server';

import { GameWithReviews, getAllGames } from '@/db/queries/game';
import ListContent from '@/components/list-content';

export default async function Home() {
  const games: GameWithReviews[] = await getAllGames();

  return (
    <main>
      {/* <h1 className='text-4xl my-4'>Games</h1> */}
      <ListContent games={games} />
    </main>
  );
}
