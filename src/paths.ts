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

export function createPersonalList() {
  return "/create-personal-list";
}

export function admin(slug: string = "") {
  return `/admin/${slug}`;
}
