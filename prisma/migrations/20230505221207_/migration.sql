/*
  Warnings:

  - You are about to drop the column `idFranchise` on the `Client` table. All the data in the column will be lost.
  - You are about to drop the column `idProduct` on the `Client` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Client" DROP CONSTRAINT "Client_idFranchise_fkey";

-- DropForeignKey
ALTER TABLE "Client" DROP CONSTRAINT "Client_idProduct_fkey";

-- AlterTable
ALTER TABLE "Client" DROP COLUMN "idFranchise",
DROP COLUMN "idProduct";
