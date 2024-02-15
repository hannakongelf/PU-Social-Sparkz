"use server";

import { TextField } from "@mui/material";
import GameTemplate from "@/components/game-template";

export default async function Home() {
  return (
    <main>
      <h1 className="text-4xl my-4">New Game Template</h1>
      <GameTemplate />
    </main>
  );
}
