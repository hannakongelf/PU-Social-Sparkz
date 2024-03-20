import { db } from '@/db';

export const getAllPersonalLists = async () => {
  return db.queue.findMany({});
};

export const getPersonalListById = async (id: string) => {
  return db.queue.findUnique({
    where: {
      id,
    },
  });
};

export const getPersonalListByAuthor = async (userId: string) => {
  return db.queue.findMany({
    where: {
      userId,
    },
  });
};

export const getPersonalListWithGames = async (id: string) => {
  return db.queue.findUnique({
    where: {
      id,
    },
    include: {
      queueContainsGame: { select: { game: true } },
    },
  });
};

export const getGamesInList = async (queueId: string) => {
  const arr = db.queueOnGame.findMany({
    where: {
      queueId: queueId,
    },
    include: {
      game: true,
    },
  });
  return (await arr).map(e => e.game)
};

export const getListNameById = async (queueId: string) => {
  return db.queue.findFirst({
    where: {
      id: queueId,
    },

  });
};
