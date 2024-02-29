import { db } from '@/db';
import { Game, Review } from '@prisma/client';

export type GameWithReviews = Game & {
  review: Review[];
};

export const getAllGames = async () => {
  return db.game.findMany({
    include: {
      review: true,
    },
  });
};

export const getGameById = async (id: number) => {
  return db.game.findUnique({
    where: {
      id,
    },
  });
};

export const getGameWithAuthor = async (id: number) => {
  return db.game.findUnique({
    where: {
      id,
    },
    include: {
      author: true,
    },
  });
};
