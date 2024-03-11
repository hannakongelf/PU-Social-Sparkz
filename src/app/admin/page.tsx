"use server";

import AdminPage from "@/components/adminPanel/admin-page";
import { useSession } from "next-auth/react";

export default async function Home() {
  return (
    <main className="flex justify-center items-center">
      <AdminPage />
    </main>
  );
}
