export { signIn } from "@/actions/signIn";
export { signOut } from "@/actions/signOut";
export { createRating } from "@/actions/create/create-rating";
export { createGame } from "@/actions/create/create-game";
export { createReport } from "@/actions/create/create-report";
export { addFavoriteGame } from "@/actions/add-favorite-game";
export { removeFavoriteGame } from "@/actions/remove-favorite-game";
export { deleteGame } from "@/actions/delete/delete-game-action";
export { deleteReview } from "@/actions/delete/delete-review-action";
export { createPersonalList } from "@/actions/create-personal-list";
export { addToPersonalList } from "@/actions/add-to-personal-list";

export function goToYourFavoriteList(
  goToYourFavoriteList: any,
  arg1: { errors: {} }
): [any, any] {
  throw new Error("Function not implemented.");
}
