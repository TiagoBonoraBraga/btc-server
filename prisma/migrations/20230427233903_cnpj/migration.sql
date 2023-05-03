/*
  Warnings:

  - Added the required column `cnpj` to the `Client` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Client_cpf_key";

-- DropIndex
DROP INDEX "Client_email_key";

-- DropIndex
DROP INDEX "Client_name_key";

-- DropIndex
DROP INDEX "Client_phone_key";

-- AlterTable
ALTER TABLE "Client" ADD COLUMN     "cnpj" TEXT NOT NULL;
