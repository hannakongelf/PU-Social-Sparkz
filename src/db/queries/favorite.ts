import { db } from '@/db';

export const getAllFavorites = async (id: string) => {
    return db.favorite.findUnique({
        where: {
            userId: id,
        },
    });
};
