/*
  Warnings:

  - The primary key for the `QueueOnGame` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `QueueOnGame` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "QueueOnGame" DROP CONSTRAINT "QueueOnGame_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "QueueOnGame_pkey" PRIMARY KEY ("gameId", "queueId");
