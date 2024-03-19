'use server';

import * as React from 'react';
import UserInfoBox from '@/components/profile/user-info-box';
import { getGamesByAuthor } from '@/db/queries/game';
import { getFavoritesByUser } from '@/db/queries/favorite';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import * as paths from '@/paths';
import { getPersonalListByAuthor } from '@/db/queries/personal-lists';

export default async function Page() {
  const session = await auth();
  if (!session || !session.user) redirect(paths.home());

  const games = await getGamesByAuthor(session.user.id);
  const favorites = await getFavoritesByUser(session.user.id);
  const queues = await getPersonalListByAuthor(session.user.id);

  return (
    <main className='flex justify-center items-center'>
      <UserInfoBox
        games={games}
        user={session.user}
        favorites={favorites}
        queues={queues}
      />
    </main>
  );
}
