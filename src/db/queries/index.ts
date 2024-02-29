import type { User, Review, Game } from '@prisma/client';

export { getAllGames, getGameById, getGameWithAuthor } from '@/db/queries/game';

export {
  getGameReviewByAuthor,
  getReviewsByAuthor,
  getReviewsByGame,
} from '@/db/queries/reviews';

export { getUserById } from '@/db/queries/user';

// Types

export type ReviewWithAuthor = {
  author: User;
} & Review;

export type GameWithReviews = Game & {
  review: Review[];
};
