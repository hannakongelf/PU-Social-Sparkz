import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { Game } from "@prisma/client";

export default function MyGameCard({ game }: { game: Game }) {
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
      className="content-center"
    >
      <Link href={`/detail/${game.id}/`}>
        <CardMedia
          sx={{ height: 140 }}
          image={
            game.image && game.image?.length > 0
              ? game.image
              : "/stock_game.jpg"
          }
          title={game.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {game.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {`${game.description.slice(0, 25)}...`}
          </Typography>
        </CardContent>
      </Link>
    </Card>
  );
}
