export { signIn } from "@/actions/signIn";
export { signOut } from "@/actions/signOut";
export { createRating } from "@/actions/create/create-rating";
export { createGame } from "@/actions/create/create-game";
export { createReport } from "@/actions/create/create-report";
export { addFavoriteGame } from "@/actions/add-favorite-game";
export { removeFavoriteGame } from "@/actions/remove-favorite-game";
export { createPersonalList } from "@/actions/create-personal-list";
export { addToPersonalList } from "@/actions/add-to-personal-list";

export function goToYourFavoriteList(
  goToYourFavoriteList: any,
  arg1: { errors: {} }
): [any, any] {
  throw new Error("Function not implemented.");
}
