/*
  Warnings:

  - You are about to drop the `game` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "game";

-- CreateTable
CREATE TABLE "Game" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "player1Id" INTEGER NOT NULL,
    "player2Id" INTEGER NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT false,
    "gameWinner" INTEGER,
    "player1Hits" INTEGER,
    "player2Hits" INTEGER,

    CONSTRAINT "Game_pkey" PRIMARY KEY ("id")
);
