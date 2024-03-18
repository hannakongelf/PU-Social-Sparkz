"use client";

import Paper from "@mui/material/Paper";
import { Game } from "@prisma/client";
import * as paths from "@/paths";
import FavoriteList from "./favorite-list-template";
import { getFavoritesByUser } from "@/db/queries/favorite";
import { redirect } from "next/navigation";
import { auth } from "@/auth";

export default async function FavoriteListContent({}) {
  const session = await auth();

  if (!session || !session.user) {
    redirect(paths.home());
    return null;
  }

  const favoriteGames: Game[] = await getFavoritesByUser(session.user.id);
  if (!favoriteGames) return null;

  return (
    <div>
      <Paper
        elevation={1}
        className="pt-1 pb-1 pr-6 pl-6 mb-8 mt-10  flex justify-between"
      ></Paper>

      <div className="grid grid-cols-5 gap-5">
        {favoriteGames.map((f) => (
          <FavoriteList favoriteGame={f} />
        ))}
      </div>
    </div>
  );
}
