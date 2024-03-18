import ReportTable from '@/components/admin/report-table';
import { getReportsWithContentDescription } from '@/db/queries';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import * as paths from '@/paths';

const AdminReportsPage = async () => {
  const session = await auth();
  if (!session?.user?.admin) redirect(paths.home());

  const reports = await getReportsWithContentDescription();
  return (
    <div>
      <h1 className='text-4xl mb-8'>Reports</h1>
      <ReportTable reports={reports} />
    </div>
  );
};

export default AdminReportsPage;
