/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `cities` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `cityName` to the `addresses` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "addresses" ADD COLUMN     "cityName" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "places" ADD COLUMN     "citiesId" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "cities_name_key" ON "cities"("name");

-- AddForeignKey
ALTER TABLE "addresses" ADD CONSTRAINT "addresses_cityName_fkey" FOREIGN KEY ("cityName") REFERENCES "cities"("name") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "places" ADD CONSTRAINT "places_citiesId_fkey" FOREIGN KEY ("citiesId") REFERENCES "cities"("id") ON DELETE SET NULL ON UPDATE CASCADE;
