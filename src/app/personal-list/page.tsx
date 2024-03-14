"use server";

import GameTemplate from "@/components/game/game-template";

export default async function Home() {
  return (
    <main className="flex justify-center items-center">
      <GameTemplate />
    </main>
  );
}
