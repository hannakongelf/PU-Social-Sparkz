import type { User, Review, Game, Favorite, Queue } from "@prisma/client";

export { getAllGames, getGameById, getGameWithAuthor } from "@/db/queries/game";

export {
  getGameReviewByAuthor,
  getReviewsByAuthor,
  getReviewsByGame,
} from "@/db/queries/reviews";

export { getUserById } from "@/db/queries/user";

export { getAllFavoritesGames } from "@/db/queries/favorite";

export {
  getAllPersonalLists,
  getPersonalListById,
  getPersonalListWithGames,
} from "@/db/queries/personal-lists";

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

export type QueueWithGames =
  | (Queue & {
      games: Game[];
    })
  | null;
