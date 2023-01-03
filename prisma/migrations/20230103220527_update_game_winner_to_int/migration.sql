/*
  Warnings:

  - The `gameWinner` column on the `Game` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Game" DROP COLUMN "gameWinner",
ADD COLUMN     "gameWinner" INTEGER;
