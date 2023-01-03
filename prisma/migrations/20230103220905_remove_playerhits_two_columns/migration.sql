/*
  Warnings:

  - You are about to drop the column `player1Hits` on the `Game` table. All the data in the column will be lost.
  - You are about to drop the column `player2Hits` on the `Game` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Game" DROP COLUMN "player1Hits",
DROP COLUMN "player2Hits";
