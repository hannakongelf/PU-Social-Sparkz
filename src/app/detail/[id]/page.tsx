'use server';

import GameContent from '@/components/game/game-content';
import { getAllFavoritesGameId, getGameById, getReviewsByGame } from '@/db/queries';

export default async function Page({
  params: { id },
}: {
  params: { id: string };
}) {
  const game = await getGameById(parseInt(id));
  const reviews = await getReviewsByGame(parseInt(id));
  const favorite = await getAllFavoritesGameId(id)

  return (
    <>
      <main className='flex flex-col content-center'>
        {game ? (
          <GameContent key={game.id.toString()} game={game} reviews={reviews} favorite={favorite} />
        ) : (
          <p>Game not found.</p>
        )}
      </main>
    </>
  );
}
