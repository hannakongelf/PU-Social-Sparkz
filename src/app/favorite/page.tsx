'use server';

import * as React from 'react';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import * as paths from '@/paths';
import { getFavoritesByUser } from '@/db/queries/favorite';
import FavoriteListContent from '@/components/profile/favorite-list-content';

export default async function FavoritePage() {
  const session = await auth();

  if (!session || !session.user) {
    redirect(paths.home());
  }

  const favorite = await getFavoritesByUser(session.user.id);

  return (
    <main>
      <h1 className='text-2xl font-semibold mt-4'>Favorites</h1>
      <FavoriteListContent favorite={favorite} />
    </main>
  );
}
