"use client";

import { GameWithReviews } from "@/db/queries";
import { Button } from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import WheelComponent from "react-wheel-of-prizes";

const SpinTheWheel = ({ games }: { games: GameWithReviews[] }) => {
  const [winner, setWinner] = useState<number | null>(null);
  const segments = games.map((g) => g.name);
  const segColors = games.map(
    (g) =>
      `#${(g.id * 5).toString(16)}${(g.id * 1).toString(16)}${(
        g.id * 2
      ).toString(16)}`
  );
  const onFinished = (winner: any) => {
    const winningGame = games.find((g) => g.name === winner);
    if (winningGame) {
      setWinner(winningGame.id);
    }
  };

  return (
    <div className="flex flex-col align-middle items-center my-5">
      <WheelComponent
        segments={segments}
        segColors={segColors}
        onFinished={(winner: any) => onFinished(winner)}
        primaryColor="black"
        contrastColor="white"
        buttonText="Spinn!"
        isOnlyOnce={false}
        size={290}
        upDuration={250}
        downDuration={250}
        fontFamily="Inter"
      />
      {winner !== null && (
        <Link href={`/detail/${winner ?? 0}`}>
          <Button type="submit" variant="contained" className="mb-5">
            Spill denne leken
          </Button>
        </Link>
      )}
    </div>
  );
};

export default SpinTheWheel;
