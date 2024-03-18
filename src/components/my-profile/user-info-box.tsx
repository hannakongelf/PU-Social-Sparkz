"use client";

import * as actions from "@/actions";
import { useSession } from "next-auth/react";
import { Button, Typography } from "@mui/material";
import Image from "next/image";
import ListMygames from "./list-my-games";
import { Game, User } from "@prisma/client";

const UserInfoBox = ({
  games,
  user,
  favorites,
}: {
  games: Game[];
  user: User | undefined;
  favorites: Game[];
}) => {
  if (!user) {
    return (
      <section>
        <form action={actions.signIn}>
          <Button type="submit" variant="contained">
            Sign in
          </Button>
        </form>
      </section>
    );
  }

  return (
    <section className="w-4/5">
      <div className="flex justify-start items-center">
        <div className="w-1/3">
          {user.image ? (
            <Image
              src={user.image}
              width={200}
              height={200}
              alt=""
              className="w-4/8"
            />
          ) : (
            <div>Your picture could not be loaded </div>
          )}
        </div>
        <div className="flex flex-col ">
          <Typography>My Profile</Typography>
          <Typography>{user.name}</Typography>
          <Typography>{user.email}</Typography>

          <form action={actions.signOut}>
            <Button type="submit" variant="contained" size="small">
              Sign out
            </Button>
          </form>
        </div>
      </div>
      <Typography>My Games</Typography>
      <ListMygames games={games} />
      {/* <MyGamesAndLists> */}

      <Typography>My Favorite Games</Typography>
      <ListMygames games={favorites} />

      <Typography>My Lists</Typography>
    </section>
  );
};

export default UserInfoBox;
