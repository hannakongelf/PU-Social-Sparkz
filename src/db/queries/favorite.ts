import { db } from '@/db';

export const getAllFavoritesGameId = async (id: string) => {
    return db.favorite.findUnique({
        where: {
            userId: id,
        },
        include: {
            games: {select: {id: true,}}
        },
    });
};
