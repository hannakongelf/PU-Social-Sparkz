import type { User, Review, Game, Favorite } from '@prisma/client';

export {
  getAllGames,
  getGameById,
  getGameWithAuthor,
  getGamesByAuthor,
} from '@/db/queries/game';

export {
  getGameReviewByAuthor,
  getReviewsByAuthor,
  getReviewsByGame,
} from '@/db/queries/reviews';

export { getUserById } from '@/db/queries/user';

export { getAllFavoritesGameId } from '@/db/queries/favorite'

// Types

export type ReviewWithAuthor = {
  author: User;
} & Review;

export type GameWithReviews = Game & {
  review: Review[];
};

export type FavoriteWithGameId = Favorite & {
  games: {
    id: number
  }[] 
} | null