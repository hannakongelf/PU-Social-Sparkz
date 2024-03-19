"use server";

import * as React from "react";

import { auth } from "@/auth";
import { redirect } from "next/navigation";
import * as paths from "@/paths";
import FavoriteListContent from "@/components/my-profile/favorite-list-content";

export default async function FavoritePage() {
  const session = await auth();

  if (!session || !session.user) {
    redirect(paths.home());
    return null;
  }

  return (
    <main>
      <FavoriteListContent />
    </main>
  );
}
