import type {
  User,
  Review,
  Game,
  Favorite,
  Queue,
  Report,
} from '@prisma/client';

export {
  getAllGames,
  getAllGamesWithReview,
  getGameById,
  getGameWithAuthor,
  getGamesByAuthor,
} from '@/db/queries/game';

export {
  getAllReviewsWithAuthor,
  getGameReviewByAuthor,
  getReviewsByAuthor,
  getReviewsByGame,
} from '@/db/queries/reviews';

export { getUserById, getAllUsers } from '@/db/queries/user';

export { getAllFavoritesGames } from '@/db/queries/favorite';

export {
  getAllPersonalLists,
  getPersonalListById,
  getPersonalListWithGames,
  getListNameById,
  getGamesInList,
} from '@/db/queries/personal-lists';

export { getReportsWithContentDescription } from '@/db/queries/report';

// Types

export type ReviewWithAuthor = {
  author: User;
} & Review;

export type GameWithReviews = Game & {
  review: Review[];
};

export type FavoriteWithGameId =
  | (Favorite & {
      games: {
        id: number;
      }[];
    })
  | null;

export type FavoriteWithGames =
  | (Favorite & {
      games: GameWithReviews[];
    })
  | null;

export type QueueWithGames =
  | (Queue & {
      games: Game[];
    })
  | null;

export type ReportWithContentAndAuthor = Report & {
  author: {
    name: string | null;
  };
  contentDescription: string;
  gameId: number;
};
