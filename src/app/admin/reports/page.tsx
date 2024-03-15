"use server";

import ReportTable from "@/components/admin/report-table";
import {
  ReportwithContentAndLink,
  getReportsWithContentDescription,
} from "@/db/queries/report";

const AdminReportsPage = async () => {
  const reports: ReportwithContentAndLink[] =
    await getReportsWithContentDescription();
  return (
    <div>
      Reports
      <ReportTable reports={reports} />
    </div>
  );
};

export default AdminReportsPage;
