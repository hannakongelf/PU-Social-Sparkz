"use client";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { checkIfUserIsAdmin } from "@/db/queries/user";

export default function AdminPage() {
  const { data: session, status } = useSession();
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAdminStatus = async () => {
      if (session?.user?.id) {
        const isAdminUser = await checkIfUserIsAdmin(session.user.id);
        setIsAdmin(isAdminUser);
        setLoading(false);
      } else {
        setLoading(false);
      }
    };

    if (status !== "loading") {
      fetchAdminStatus();
    }
  }, [session, status]);

  if (status === "loading" || loading) return <div>Loading...</div>;
  if (!isAdmin) return <div>Access Denied</div>;

  return <div>Admin Panel</div>;
}
