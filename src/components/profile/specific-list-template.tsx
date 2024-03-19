"use client";

import * as React from "react";
import Link from "next/link";
import { Game, Queue } from "@prisma/client";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { CardContent, Typography, Rating } from "@mui/material";
import { useSession } from "next-auth/react";
import { QueueWithGames } from "@/db/queries";

export default function SpecificListGameCard({
  specificGame,
  key,
}: {
  specificGame: Game;
  key: number;
}) {
  const session = useSession();
  if (!specificGame) return null;

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
      <Link href={`/detail/${key}/`}>
        <CardMedia
          sx={{ height: 140 }}
          image={"/stock_game.jpg"}
          title={specificGame.name}
        />
      </Link>

      <Link href={`/detail/${key}/`}>
        <CardContent className="relative top-2">
          <Typography gutterBottom variant="h5" component="div">
            {specificGame.name}
          </Typography>
        </CardContent>
      </Link>
    </Card>
  );
}
