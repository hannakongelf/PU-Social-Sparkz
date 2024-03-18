import ReportTable from '@/components/admin/report-table';
import {
  ReportwithContentAndLink,
  getReportsWithContentDescription,
} from '@/db/queries/report';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import * as paths from '@/paths';

const AdminReportsPage = async () => {
  const session = await auth();
  if (!session?.user?.admin) redirect(paths.home());

  const reports: ReportwithContentAndLink[] =
    await getReportsWithContentDescription();
  return (
    <div>
      <h1 className='text-4xl mb-8'>Reports</h1>
      <ReportTable reports={reports} />
    </div>
  );
};

export default AdminReportsPage;
