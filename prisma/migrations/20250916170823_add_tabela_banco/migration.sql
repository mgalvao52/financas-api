/*
  Warnings:

  - You are about to drop the column `nome` on the `Conta` table. All the data in the column will be lost.
  - Added the required column `bancoId` to the `Conta` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Conta" DROP COLUMN "nome",
ADD COLUMN     "bancoId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "public"."Banco" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "Banco_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."Conta" ADD CONSTRAINT "Conta_bancoId_fkey" FOREIGN KEY ("bancoId") REFERENCES "public"."Banco"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
