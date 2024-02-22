/*
  Warnings:

  - You are about to drop the column `vistis` on the `Form` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Form" DROP COLUMN "vistis",
ADD COLUMN     "visits" INTEGER NOT NULL DEFAULT 0;
