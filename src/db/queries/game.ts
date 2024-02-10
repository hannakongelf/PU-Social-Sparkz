import prisma from "../../../lib/prisma";
import { Game, Review } from "@prisma/client";

export type GameWithReviews = Game & {
  Review: Review[];
};

export const getAllGames = async (): Promise<GameWithReviews[]> => {
  const games = await prisma.game.findMany({
    include: {
      Review: true,
    },
  });
  return games;
};

export const getGameById = async (id: number): Promise<GameWithReviews | null> => {
  const game = await prisma.game.findUnique({
    where: { id: id },
    include: {
      Review: true,
    },
  });
  return game;
};
