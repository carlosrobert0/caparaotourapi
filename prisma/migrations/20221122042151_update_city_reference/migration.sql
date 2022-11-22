/*
  Warnings:

  - You are about to drop the column `cityName` on the `places` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "places" DROP CONSTRAINT "places_cityName_fkey";

-- DropIndex
DROP INDEX "cities_name_key";

-- AlterTable
ALTER TABLE "places" DROP COLUMN "cityName",
ADD COLUMN     "city_id" TEXT;

-- AddForeignKey
ALTER TABLE "places" ADD CONSTRAINT "places_city_id_fkey" FOREIGN KEY ("city_id") REFERENCES "cities"("id") ON DELETE SET NULL ON UPDATE CASCADE;
