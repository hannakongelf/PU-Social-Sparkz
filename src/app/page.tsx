'use server';

import { GameWithReviews, getAllGames } from '@/db/queries/game';
import ListContent from '@/components/list-content';
import { Button } from '@mui/material';

export default async function Home() {
  const games: GameWithReviews[] = await getAllGames();

  return (
    <main>
      <h1 className='text-4xl my-4'>Leker</h1>
      <ListContent games={games} />
    </main>
  );
}
