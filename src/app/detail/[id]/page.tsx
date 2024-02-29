'use server';

import GameContent from '@/components/game/game-content';
import { getGameById } from '@/db/queries/game';
import { getReviewsByGame } from '@/db/queries/reviews';

export default async function Page({
  params: { id },
}: {
  params: { id: string };
}) {
  const game = await getGameById(parseInt(id));
  const reviews = await getReviewsByGame(parseInt(id));

  return (
    <>
      <main className='flex flex-col content-center'>
        {game ? (
          <GameContent key={game.id.toString()} game={game} reviews={reviews} />
        ) : (
          <p>Game not found.</p>
        )}
      </main>
    </>
  );
}
