import GamesTable from '@/components/admin/games-table';
import { getAllGames } from '@/db/queries';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import * as paths from '@/paths';
import { Typography } from '@mui/material';

const GamesAdminPage = async () => {
  const session = await auth();
  if (!session?.user?.admin) redirect(paths.home());

  const games = await getAllGames();
  return (
    <div>
      <h1 className='text-4xl mb-8'>Games</h1>
      <GamesTable data={games} />
    </div>
  );
};

export default GamesAdminPage;
