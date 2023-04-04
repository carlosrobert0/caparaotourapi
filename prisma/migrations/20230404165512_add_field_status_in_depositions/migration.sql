/*
  Warnings:

  - Added the required column `status` to the `depositions` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "depositions" ADD COLUMN     "status" TEXT NOT NULL;
