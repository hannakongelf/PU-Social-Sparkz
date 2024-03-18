import { db } from "@/db";

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
