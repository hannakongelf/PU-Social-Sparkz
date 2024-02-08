import prisma from "../../../lib/prisma";
import { Game } from "@prisma/client";

export const getAllGames = async (): Promise<Game[]> => {
  const games = await prisma.game.findMany();
  return games;
};

export const getGameById = async (id: number): Promise<Game | null> => {
  const game = await prisma.game.findUnique({ where: { id: id } });
  return game;
};
