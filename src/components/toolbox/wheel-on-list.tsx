"use client";

import { Game } from "@prisma/client";
import { useState } from "react";
import SpinTheWheel from "./spin-the-wheel";
import Button from "@mui/material/Button";
import { useAutoAnimate } from "@formkit/auto-animate/react";

const WheelOnList = ({ games }: { games: Game[] }) => {
  const [showWheel, setShowWheel] = useState(false);
  const [animationParent] = useAutoAnimate();

  if (games.length <= 0) {
    return <></>;
  }

  return (
    <div
      className="flex flex-col align-middle items-center my-5"
      ref={animationParent}
    >
      <Button variant="contained" onClick={() => setShowWheel(!showWheel)}>
        Show Wheel
      </Button>
      {showWheel && <SpinTheWheel games={games} />}
    </div>
  );
};

export default WheelOnList;
