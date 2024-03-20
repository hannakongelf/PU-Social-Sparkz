'use server';

import { auth } from '@/auth';
import GameContent from '@/components/game/game-content';
import {
  getAllFavoritesGames,
  getGameById,
  getReviewsByGame,
} from '@/db/queries';
import { getPersonalListByAuthor } from '@/db/queries/personal-lists';

export default async function Page({
  params: { id },
}: {
  params: { id: string };
}) {
  const session = await auth();
  const game = await getGameById(parseInt(id));
  const reviews = await getReviewsByGame(parseInt(id));
  const favorite = await getAllFavoritesGames(session?.user?.id || '');
  const userLists = await getPersonalListByAuthor(session?.user?.id || '');

  return (
    <main className='flex flex-col content-center'>
      {game ? (
        <GameContent
          key={game.id.toString()}
          game={game}
          reviews={reviews}
          favorite={favorite}
          userLists={userLists}
        />
      ) : (
        <p>Game not found.</p>
      )}
    </main>
  );
}
