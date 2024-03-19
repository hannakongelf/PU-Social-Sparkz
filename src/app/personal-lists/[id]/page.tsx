'use server';

import { auth } from '@/auth';
import GameContent from '@/components/game/game-content';
import {
  getAllFavoritesGames,
  getGameById,
  getReviewsByGame,
} from '@/db/queries';
import {
  getGamesInList,
  getPersonalListByAuthor,
} from '@/db/queries/personal-lists';

export default async function Page({
  params: { id },
}: {
  params: { id: string };
}) {
  const games = await getGamesInList(id);

  return (
    <main className='flex flex-col content-center'>
      {games ? (
        <GameContent
          key={game.id.toString()}
          game={game}
          reviews={reviews}
          favorite={favorite}
          userLists={userLists}
        />
      ) : (
        <p>List not found.</p>
      )}
    </main>
  );
}
