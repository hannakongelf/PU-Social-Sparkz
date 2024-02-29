import { db } from '@/db';

export const getUserById = async (id: string) => {
  return db.user.findUnique({
    where: {
      id,
    },
  });
};
