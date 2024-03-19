"use client";

import * as actions from "@/actions";
import Image from "next/image";
import ListMygames from "./list-my-games";
import { Favorite, Game } from "@prisma/client";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Link from "next/link";

const UserInfoBox = ({
  games,
  user,
  favoriteList,
}: {
  games: Game[];
  favoriteList: Game[];
  user: {
    image?: string | null;
    name?: string | null;
    email?: string | null;
  };
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
          <Avatar sx={{ height: 200, width: 200 }}>
            <Image
              src={user.image || ""}
              width={200}
              height={200}
              alt="Profile image"
            />
          </Avatar>
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
      <Link href={`/favorite-lists-with-games/${favoriteList.id}/`}>
        <Button
          action={actions.goToYourFavoriteList.bind(null, favoriteList.id)}
        >
          My favorite games
        </Button>
      </Link>
      <Typography>My Lists</Typography>
    </section>
  );
};

export default UserInfoBox;
