"use client";

import * as React from "react";
import Link from "next/link";
import { Game, Queue } from "@prisma/client";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { CardContent, Typography, Rating } from "@mui/material";
import { favoriteList } from "@/paths";
import { useFormState } from "react-dom";
import * as actions from "@/actions";

const FavoriteList = ({ favoriteGame }: { favoriteGame: Game }) => {
  if (!favoriteGame) return null;

  return (
    <Card
      sx={{
        maxWidth: 345,
        boxShadow: "none",
        border: "solid",
        borderWidth: "0px",
        borderTopWidth: "5px",
        borderBottomWidth: "5px",
        borderRadius: 0,
        borderColor: "#845EC2",
        "&:hover": {
          borderColor: "darkpurple",
        },
      }}
      className="static content-center"
    >
      <Link href={`/favorite/${favoriteGame.id}/`}>
        <CardMedia
          sx={{ height: 140 }}
          image={"/stock_game.jpg"}
          title={favoriteList.name}
        />
      </Link>

      <Link href={`/favorite/${favoriteGame.id}/`}>
        <CardContent className="relative top-2">
          <Typography gutterBottom variant="h5" component="div">
            {favoriteList.name}
          </Typography>
        </CardContent>
      </Link>
    </Card>
  );
};

export default FavoriteList;
