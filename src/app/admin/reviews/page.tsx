import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import * as paths from '@/paths';
import ReviewTable from '@/components/admin/reviews-table';
import { getAllReviewsWithAuthor } from '@/db/queries';

const AdminReviewsPage = async () => {
  const session = await auth();
  if (!session?.user?.admin) redirect(paths.home());

  const reviews = await getAllReviewsWithAuthor();
  return (
    <div>
      <h1 className='text-4xl mb-8'>Reviews</h1>
      <ReviewTable reviews={reviews} />
    </div>
  );
};

export default AdminReviewsPage;
