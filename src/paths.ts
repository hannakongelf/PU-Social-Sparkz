export function gamePath(id: number) {
  return `/detail/${id}`;
}

export function home() {
  return "/";
}

export function profile() {
  return "/my-profile";
}

export function personalLists() {
  return "/personal-lists";
}

export function personalList(id: string) {
  return `/personal-lists/${id}`;
}

export function specificGames(id: string) {
  return `/personal-lists-with-games/${id}/`;
}

export function createPersonalList() {
  return "/create-personal-list";
}

export function admin(slug: string = "") {
  return `/admin/${slug}`;
}

export function favoriteList(id: string) {
  return `/favorite-lists-with-games/${id}/`;
}
