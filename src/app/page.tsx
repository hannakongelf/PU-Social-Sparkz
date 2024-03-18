'use server';

import { GameWithReviews, getAllGames } from '@/db/queries';
import ListContent from '@/components/list-content';
import { getAllFavoritesGameId } from '@/db/queries/favorite';
import { auth } from '@/auth';

export default async function Home() {
  const games: GameWithReviews[] = await getAllGames();
  const session = await auth();
  const favorite = await getAllFavoritesGameId(session?.user?.id ?? '');

  return (
    <main>
      <ListContent games={games} />
      test
    </main>
  );
}
