-- DropForeignKey
ALTER TABLE "QueueOnGame" DROP CONSTRAINT "QueueOnGame_queueId_fkey";

-- AddForeignKey
ALTER TABLE "QueueOnGame" ADD CONSTRAINT "QueueOnGame_queueId_fkey" FOREIGN KEY ("queueId") REFERENCES "Queue"("id") ON DELETE CASCADE ON UPDATE CASCADE;
