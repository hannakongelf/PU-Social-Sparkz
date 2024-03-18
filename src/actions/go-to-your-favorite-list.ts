"use server";

import { redirect } from "next/navigation";
import * as paths from "@/paths";

export async function goToYourFavoriteList({ id }: { id: string }) {
  redirect(paths.favoriteList(id));
}
