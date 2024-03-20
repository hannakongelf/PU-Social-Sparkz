'use server';

import { auth } from '@/auth';
import PersonalListCard from '@/components/profile/lists-template';
import { getAllFavoritesGames } from '@/db/queries/favorite';
import { getPersonalListByAuthor } from '@/db/queries/personal-lists';

export default async function PersonalLists() {
  const session = await auth();
  if (!session || !session.user) return null;
  const personalLists = await getPersonalListByAuthor(session.user.id);
  const favoriteList = await getAllFavoritesGames(session.user.id);
  if (!favoriteList) throw new Error('No favorite list found');

  return (
    <>
      <h1 className='text-2xl my-4 font-semibold'>Your lists</h1>
      <div className='grid grid-cols-4 gap-5'>
        <PersonalListCard list={{ ...favoriteList, name: 'Favorites' }} />
        {personalLists.map((list) => (
          <PersonalListCard key={list.id} list={list} />
        ))}
      </div>
    </>
  );
}
