import UserTable from '@/components/admin/user-table';
import { getAllUsers } from '@/db/queries/user';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import * as paths from '@/paths';

const AdminUsersPage = async () => {
  const session = await auth();
  if (!session?.user?.admin) redirect(paths.home());

  const users = await getAllUsers();
  return (
    <div>
      <h1 className='text-4xl mb-8'>Users</h1>
      <UserTable users={users} />
    </div>
  );
};

export default AdminUsersPage;
