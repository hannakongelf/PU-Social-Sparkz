'use client';

import Paper from '@mui/material/Paper';
import * as paths from '@/paths';
import { redirect } from 'next/navigation';
import { FavoriteWithGames } from '@/db/queries';
import { useSession } from 'next-auth/react';
import ListCard from '../list-card';

export default function FavoriteListContent({
  favorite,
}: {
  favorite: FavoriteWithGames;
}) {
  const session = useSession();
  if (!session.data || !session.data.user) {
    redirect(paths.home());
  }

  if (!favorite) return <div>You dont have any favorite games</div>;

  return (
    <div>
      <Paper
        elevation={1}
        className='pt-1 pb-1 pr-6 pl-6 mb-8 mt-10  flex justify-between'
      >
        <div className='grid grid-cols-5 gap-5'>
          {favorite.games.map((game) => (
            <ListCard key={game.id} game={game} favorite={'not needed'} />
          ))}
        </div>
      </Paper>
    </div>
  );
}
