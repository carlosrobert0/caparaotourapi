/*
  Warnings:

  - You are about to drop the column `cityName` on the `addresses` table. All the data in the column will be lost.
  - You are about to drop the column `citiesId` on the `places` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "addresses" DROP CONSTRAINT "addresses_cityName_fkey";

-- DropForeignKey
ALTER TABLE "places" DROP CONSTRAINT "places_citiesId_fkey";

-- DropIndex
DROP INDEX "cities_name_key";

-- AlterTable
ALTER TABLE "addresses" DROP COLUMN "cityName";

-- AlterTable
ALTER TABLE "places" DROP COLUMN "citiesId";
