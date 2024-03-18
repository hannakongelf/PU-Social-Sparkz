'use server';

import Countdown from '@/components/toolbox/countdown';
import SpinTheWheel from '@/components/toolbox/spin-the-wheel';
import { getAllGames } from '@/db/queries';

export default async function Home() {
  const games = await getAllGames();

  return (
    <main className='flex flex-col justify-center items-center'>
      <SpinTheWheel games={games} />
      <Countdown />
    </main>
  );
}
