'use client';

import { Game } from '@prisma/client';
import MyGameCard from './my-game-card';

export default function ListMyGames({ games }: { games: Game[] }) {
  return (
    <div className='grid grid-cols-5 gap-5'>
      {games.map((g) => (
        <MyGameCard game={g} key={g.id} />
      ))}
    </div>
  );
}
