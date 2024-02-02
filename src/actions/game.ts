import prisma from "../../lib/prisma"
import { Game } from "@prisma/client";

export const getAllGames = async (): Promise<Game[]> => {
  const games = await prisma.game.findMany();
  return games;
};
