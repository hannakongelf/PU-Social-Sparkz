'use server';
import { Game } from '@prisma/client';
import ListCard from '../../../components/list-card';
import { getGameById } from '../../../db/queries/game';
import GameContent from '@/components/game-content';
import ReviewForm from '@/components/create-review-form';

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
