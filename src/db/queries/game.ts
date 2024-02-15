import prisma from "../../../lib/prisma";
import { Game, Review, gameType } from "@prisma/client";

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

export const getGameById = async (id: number): Promise<(Game & { Review: (Review & { author: { name: string | null } })[] }) | null> => {
  const game = await prisma.game.findUnique({
    where: { id: id },
    include: {
      Review: {
        include: {
          author: {
            select: {
              name: true,
            },
          },
        },
      },
    },
  });

  if (game) {
    return {
      ...game,
      Review: game.Review.map(review => ({
        ...review,
        username: review.author.name, 
        author: undefined,
      })),
    };
  }

  return game;
};

