/*
  Warnings:

  - You are about to drop the column `gameId` on the `Favorite` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userId]` on the table `Favorite` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Favorite" DROP CONSTRAINT "Favorite_gameId_fkey";

-- AlterTable
ALTER TABLE "Favorite" DROP COLUMN "gameId";

-- CreateTable
CREATE TABLE "_FavoriteToGame" (
    "A" TEXT NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_FavoriteToGame_AB_unique" ON "_FavoriteToGame"("A", "B");

-- CreateIndex
CREATE INDEX "_FavoriteToGame_B_index" ON "_FavoriteToGame"("B");

-- CreateIndex
CREATE UNIQUE INDEX "Favorite_userId_key" ON "Favorite"("userId");

-- AddForeignKey
ALTER TABLE "_FavoriteToGame" ADD CONSTRAINT "_FavoriteToGame_A_fkey" FOREIGN KEY ("A") REFERENCES "Favorite"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FavoriteToGame" ADD CONSTRAINT "_FavoriteToGame_B_fkey" FOREIGN KEY ("B") REFERENCES "Game"("id") ON DELETE CASCADE ON UPDATE CASCADE;
