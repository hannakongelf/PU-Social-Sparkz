'use server';

import { getGameById } from '../../../db/queries/game';
import GameContent from '@/components/game/game-content';

export default async function Page({
  params: { id },
}: {
  params: { id: string };
}) {
  const game = await getGameById(parseInt(id));

  return (
    <>
      <main className='flex flex-col content-center'>
        {game ? (
          <GameContent key={game.id.toString()} game={game} />
        ) : (
          <p>Game not found.</p>
        )}
      </main>
    </>
  );
}
