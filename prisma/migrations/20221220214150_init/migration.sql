-- CreateTable
CREATE TABLE "game" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "player1Id" INTEGER NOT NULL,
    "player2Id" INTEGER NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT false,
    "gameWinner" INTEGER NOT NULL,
    "player1Hits" INTEGER NOT NULL,
    "player2Hits" INTEGER NOT NULL,

    CONSTRAINT "game_pkey" PRIMARY KEY ("id")
);
