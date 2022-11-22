/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `cities` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "places" ADD COLUMN     "cityName" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "cities_name_key" ON "cities"("name");

-- AddForeignKey
ALTER TABLE "places" ADD CONSTRAINT "places_cityName_fkey" FOREIGN KEY ("cityName") REFERENCES "cities"("name") ON DELETE SET NULL ON UPDATE CASCADE;
