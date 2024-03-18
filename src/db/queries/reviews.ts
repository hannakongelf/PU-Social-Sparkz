import { db } from '@/db';

export const getAllReviewsWithAuthor = async () => {
  return db.review.findMany({
    include: {
      author: true,
    },
  });
};

export const getReviewsByGame = async (gameId: number) => {
  return db.review.findMany({
    where: {
      gameId,
    },
    include: {
      author: true,
    },
  });
};

export const getReviewsByAuthor = async (userId: string) => {
  return db.review.findMany({
    where: {
      userId,
    },
  });
};

export const getGameReviewByAuthor = async (gameId: number, userId: string) => {
  return db.review.findUnique({
    where: {
      usergame: {
        gameId,
        userId,
      },
    },
  });
};
