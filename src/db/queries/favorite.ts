import { db } from '@/db';

export const getAllFavoritesGames = async (id: string) => {
  return db.favorite.findUnique({
    where: {
      userId: id,
    },
    include: {
      games: true,
    },
  });
};

export const getFavoritesByUser = async (id: string) => {
  return await db.favorite.findUnique({
    where: {
      userId: id,
    },
    include: {
      games: {
        include: {
          review: true,
        },
      },
    },
  });
};
