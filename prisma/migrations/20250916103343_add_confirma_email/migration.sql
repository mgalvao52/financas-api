/*
  Warnings:

  - Changed the type of `tipo` on the `Transacao` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "public"."Tipo" AS ENUM ('entrada', 'saida');

-- AlterTable
ALTER TABLE "public"."Transacao" DROP COLUMN "tipo",
ADD COLUMN     "tipo" "public"."Tipo" NOT NULL;

-- AlterTable
ALTER TABLE "public"."Usuario" ADD COLUMN     "ativo" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "email_confirmado" BOOLEAN NOT NULL DEFAULT false;
