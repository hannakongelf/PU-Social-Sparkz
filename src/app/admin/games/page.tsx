import GamesTable from '@/components/admin/games-table';
import { getAllGames } from '@/db/queries';

const GamesAdminPage = async () => {
  const games = await getAllGames();
  return <GamesTable data={games} />;
};

export default GamesAdminPage;
