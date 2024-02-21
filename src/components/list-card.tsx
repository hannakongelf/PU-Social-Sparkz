import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { Rating } from "@mui/material";
import { GameWithReviews } from "@/db/queries/game";

export default function ListCard({ game }: { game: GameWithReviews }) {
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
          {game.Review.length > 0 ? (
            <Rating
              name="read-only"
              value={
                game.Review.map((r) => r.rating).reduce((a, b) => a + b, 0) /
                game.Review.filter((r) => !!r.rating).length
              }
              readOnly
            />
          ) : (
            "No reviews"
          )}
        </CardContent>
      </Link>
    </Card>
  );
}
