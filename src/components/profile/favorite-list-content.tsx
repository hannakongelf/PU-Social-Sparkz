'use client';

import Paper from '@mui/material/Paper';
import { FavoriteWithGames } from '@/db/queries';
import ListCard from '../list-card';

export default function FavoriteListContent({
  favorite,
}: {
  favorite: FavoriteWithGames;
}) {
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
