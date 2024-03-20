"use client";

import ReviewContent from "@/components/game/review-content";
import RatingCard from "@/components/game/rating-card";
import Image from "next/image";
import { Game, Queue } from "@prisma/client";
import { FavoriteWithGameId, ReviewWithAuthor } from "@/db/queries";
import { useState } from "react";
import ReportForm from "../report-form";
import { useSession } from "next-auth/react";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import Countdown from "../toolbox/countdown";
import AddToPersonalList from "../profile/add-to-personal-list";
import FavoriteGame from "../profile/favorite";

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
  const [showTimer, setShowTimer] = useState(false);
  const [animationParent] = useAutoAnimate();
  const session = useSession();

  return (
    <div ref={animationParent}>
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
          />
          <AddToPersonalList gameId={game.id} userLists={userLists} />
          <FavoriteGame gameId={game.id} favorite={favorite} />
          <div className="flex gap-2 p-2 justify-between w-full">
            <section>
              <div className="flex flex-col">
                <p>Other users rating of this game</p>
                <p>
                  From {game.playerMin} to {game.playerMax} players
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
            </section>
            <Button
              type="submit"
              variant="contained"
              onClick={() => {
                setShowTimer(!showTimer);
              }}
            >
              {showTimer ? "Hide Timer" : "Show Timer"}
            </Button>
          </div>
        </section>
      </div>
      {showTimer && (
        <div className="my-4 border-[#845EC2] border-solid border-4 rounded-sm">
          <Countdown />
        </div>
      )}
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

      {session.data?.user
        ? reviews.map((r) => r.author.id).indexOf(session.data?.user.id) ===
            -1 && (
            <RatingCard
              game={game.id}
              oldReview={
                reviews.filter(
                  (r) => r.author.id === session.data?.user?.id
                )[0] ?? null
              }
            />
          )
        : null}
      {reviews
        .sort((a, b) => {
          if (!session.data?.user) return 0;
          if (b.author.id === session.data.user.id) return 1;
          else if (a.author.id === session.data?.user.id) return -1;
          return 0;
        })
        .map((review) => (
          <ReviewContent
            key={review.id}
            review={review}
            userId={session.data?.user?.id || null}
          />
        ))}
    </div>
  );
};

export default GameContent;
