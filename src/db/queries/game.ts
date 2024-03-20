import { db } from '@/db';

export const getAllGames = async () => {
  return db.game.findMany();
};

export const getAllGamesWithReview = async () => {
  return db.game.findMany({
    include: {
      review: {
        select: {
          rating: true,
        },
      },
    },
  });
};

export const getAllGamesNoReview = async () => {
  return db.game.findMany({});
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

export const getGamesByAuthor = async (id: string) => {
  return db.game.findMany({
    where: {
      userId: id,
    },
    include: {
      review: true,
    },
  });
};
