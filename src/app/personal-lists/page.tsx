'use server';

import { auth } from '@/auth';
import PersonalListCard from '@/components/profile/lists-template';
import { getAllFavoritesGames } from '@/db/queries/favorite';
import { getPersonalListByAuthor } from '@/db/queries/personal-lists';
import Delete from '@mui/icons-material/Delete';
import * as actions from '@/actions';

export default async function PersonalLists() {
  const session = await auth();
  if (!session || !session.user) return null;
  const personalLists = await getPersonalListByAuthor(session.user.id);
  const favoriteList = await getAllFavoritesGames(session.user.id);

  return (
    <>
      <h1 className='text-2xl my-4 font-semibold'>Your lists</h1>
      <div className='grid grid-cols-4 gap-5'>
        {favoriteList && (
          <PersonalListCard list={{ ...favoriteList, name: 'Favorites' }} />
        )}
        {personalLists.map((list) => (
          <div key={list.id}>
            <PersonalListCard list={list} />
            <form
              action={actions.deletePersonalList.bind(null, list.id)}
              className='my-2'
            >
              <button type='submit'>
                Delete list
                <Delete color='error' className='mr-8' />
              </button>
            </form>
          </div>
        ))}
      </div>
    </>
  );
}
