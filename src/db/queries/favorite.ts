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


export const getFavoritesByUser = async (id: string) => {
    const favorite = await db.favorite.findUnique({
        where: {
            userId: id,
        },
        include: {
            games: true, // Make sure this relation is correctly defined in your Prisma schema
        }
    });
    return favorite ? favorite.games : [];
};
