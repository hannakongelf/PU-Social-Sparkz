'use server';

import * as React from 'react';

import UserInfoBox from '@/components/my-profile/user-info-box';
import { Game } from '@prisma/client';
import { getGamesByAuthor } from '@/db/queries/game';
import { getFavoritesByUser } from '@/db/queries/favorite';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import * as paths from '@/paths';

export default async function Page() {
  const session = await auth();
  if (!session || !session.user) redirect(paths.home());
  const games: Game[] = await getGamesByAuthor(session.user.id);
  const favorites: Game[] = await getFavoritesByUser(session.user.id);

  return (
    <main className='flex justify-center items-center'>
      <UserInfoBox games={games} user={session.user} favorites={favorites} />
    </main>
  );
}
