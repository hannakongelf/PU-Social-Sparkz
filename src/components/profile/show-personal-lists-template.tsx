"use client";

import * as React from "react";
import Link from "next/link";
import { Queue } from "@prisma/client";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { CardContent, Typography, Rating } from "@mui/material";
import { useSession } from "next-auth/react";
import { QueueWithGames } from "@/db/queries";

export default function PersonalListCard({
  personalList,
}: {
  personalList: QueueWithGames;
}) {
  const session = useSession();
  if (!personalList) return null;

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
      <Link href={`/personal-lists/${personalList.id}/`}>
        <CardMedia
          sx={{ height: 140 }}
          image={"/stock_game.jpg"}
          title={personalList.name}
        />
      </Link>

      <Link href={`/personal-lists/${personalList.id}/`}>
        <CardContent className="relative top-2">
          <Typography gutterBottom variant="h5" component="div">
            {personalList.name}
          </Typography>
        </CardContent>
      </Link>
    </Card>
  );
}
