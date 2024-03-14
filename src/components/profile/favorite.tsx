"use client";

import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import type { FavoriteWithGameId } from "@/db/queries";
import { useSession } from "next-auth/react";
import * as actions from "@/actions";
import IconButton from "@mui/material/IconButton";

interface Favorite {
  className?: string;
  gameId: number;
  favorite: FavoriteWithGameId;
}

const FavoriteGame = ({ gameId, favorite }: Favorite) => {
  const session = useSession();

  if (!session.data?.user) return null;

  const test = favorite?.games.map((game) => game.id);
  const isFavorite = test ? test.includes(gameId) : false;

  return (
    <>
      {!isFavorite ? (
        <form action={actions.addFavoriteGame.bind(null, gameId)}>
          <IconButton
            type="submit"
            aria-label="favorite"
            className="bg-purple-500"
            color="inherit"
          >
            <FavoriteBorderIcon />
          </IconButton>
        </form>
      ) : (
        <form action={actions.removeFavoriteGame.bind(null, gameId)}>
          <IconButton
            type="submit"
            aria-label="favorite"
            className="bg-purple-500"
            color="inherit"
          >
            <FavoriteIcon />
          </IconButton>
        </form>
      )}
    </>
  );
};

export default FavoriteGame;
