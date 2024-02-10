"use client";

import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Game } from "@prisma/client";
import { GameWithReviews } from "@/db/queries/game";
import Image from "next/image";

const GameContent = ({ game }: { game: GameWithReviews }) => {
  return (
    <>
      <Image
        src={
          "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg"
        }
        alt="Sample Image"
        width={500} // Desired width
        height={300} // Desired height
        objectFit="cover" // Crop or resize to cover the container without stretching
      />
    </>
  );
};

export default GameContent;
