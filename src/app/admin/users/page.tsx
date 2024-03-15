import UserTable from "@/components/admin/user-table";
import { getAllUsers } from "@/db/queries/user";

const AdminUsersPage = async () => {
  const users = await getAllUsers();

  return (
    <div>
      Users
      <UserTable users={users} />
    </div>
  );
};

export default AdminUsersPage;
