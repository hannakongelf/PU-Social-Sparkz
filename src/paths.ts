export function gamePath(id: number) {
  return `/detail/${id}`;
}

export function home() {
  return '/';
}

export function admin(slug: string = '') {
  return `/admin/${slug}`;
}
