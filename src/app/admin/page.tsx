import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import * as paths from '@/paths';

const AdminPage = async () => {
  const session = await auth();
  if (!session?.user?.admin) redirect(paths.home());
  return <div>This the admin page.</div>;
};

export default AdminPage;
