'use server';

import ListCard from '@/components/list-card';
import { getGamesInList, getListNameById } from '@/db/queries/';
import Paper from '@mui/material/Paper';
import { Game, Queue } from '@prisma/client';
import { redirect } from 'next/navigation';
import * as paths from '@/paths';

export default async function Page({
  params: { id },
}: {
  params: { id: string };
}) {
  const list: Queue | null = await getListNameById(id);
  if (!list) redirect(paths.home());
  const games: Game[] = await getGamesInList(id);

  return (
    <main className='flex flex-col content-center'>
      <h1 className='text-2xl mt-4'>
        Your list - <span className='font-semibold'>{list?.name}</span>
      </h1>
      <Paper
        elevation={1}
        className='pt-1 pb-1 pr-6 pl-6 mb-8 mt-10  flex justify-between'
      >
        <div className='grid grid-cols-5 gap-5'>
          {games.map((game) => (
            <ListCard
              key={game.id}
              game={{ ...game, review: [] }}
              favorite={'not needed'}
            />
          ))}
        </div>
      </Paper>
    </main>
  );
}
