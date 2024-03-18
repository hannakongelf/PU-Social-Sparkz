"use client";

import { Button, Rating } from "@mui/material";
import ReviewContent from "@/components/game/review-content";
import RatingCard from "@/components/game/rating-card";
import Image from "next/image";
import { Game, Queue } from "@prisma/client";
import { FavoriteWithGameId, ReviewWithAuthor } from "@/db/queries";
import { useState } from "react";
import ReportForm from "../report-form";
import { useSession } from "next-auth/react";
import FavoriteGame from "../profile/favorite";
import CreatePersonalList from "../profile/create-personal-list";
import AddToPersonalList from "../profile/add-to-personal-list";

const GameContent = ({
  game,
  reviews,
  favorite,
  userLists,
}: {
  game: Game;
  reviews: ReviewWithAuthor[];
  favorite: FavoriteWithGameId;
  userLists: Queue[];
}) => {
  const [open, setOpen] = useState<boolean>(false);

  const session = useSession();

  return (
    <>
      <div className="flex gap-2">
        <section className="bg-[#845EC2] text-white shadow-2xl rounded">
          <h1 className="text-center p-4">{game.type}</h1>
          <Image
            src={
              game.image && game.image?.length > 0
                ? game.image
                : "/stock_game.jpg"
            }
            alt="Sample Image"
            width={1200}
            height={300}
            objectFit="cover"
          />
          <AddToPersonalList gameId={game.id} userLists={userLists} />
          <FavoriteGame gameId={game.id} favorite={favorite} />
          <div className="flex gap-2 p-2">
            <div className="flex flex-col">
              <p>Brukeres vurdering av leken</p>
              <p>
                Fra {game.playerMin} til {game.playerMax} spillere
              </p>
            </div>

            <Rating
              name="read-only"
              value={
                reviews.map((r) => r.rating).reduce((a, b) => a + b, 0) /
                reviews.filter((r) => !!r.rating).length
              }
              readOnly
            />
          </div>
        </section>
      </div>

      <h2 className="text-4xl mt-8 mb-2">{game.name}</h2>
      <p>{game.description}</p>

      {session.data?.user ? (
        <>
          <section className="my-4">
            <Button
              variant="outlined"
              color="error"
              onClick={() => setOpen(true)}
            >
              Report this game
            </Button>
          </section>

          <ReportForm open={open} setOpen={setOpen} id={game.id} type="GAME" />
        </>
      ) : null}
      {reviews.map((r) => r.author.id).indexOf(session.data?.user.id) ===
        -1 && (
        <RatingCard
          game={game.id}
          oldReview={
            reviews.filter((r) => r.author.id === session.data?.user?.id)[0] ??
            null
          }
        />
      )}
      {reviews
        .sort(
          (a, b) =>
            (b.author.id === session.data?.user.id) -
            (a.author.id === session.data?.user.id)
        )
        .map((review) => (
          <ReviewContent
            key={review.id}
            review={review}
            user={session.data?.user}
          />
        ))}
    </>
  );
};

export default GameContent;
