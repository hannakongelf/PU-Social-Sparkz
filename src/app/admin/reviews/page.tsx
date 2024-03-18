import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import * as paths from '@/paths';

const AdminReviewsPage = async () => {
  const session = await auth();
  if (!session?.user?.admin) redirect(paths.home());
  return (
    <div>
      <h1 className='text-4xl mb-8'>Reviews</h1>
      Reviews
    </div>
  );
};

export default AdminReviewsPage;
