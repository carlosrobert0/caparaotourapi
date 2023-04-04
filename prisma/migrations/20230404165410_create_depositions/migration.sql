-- CreateTable
CREATE TABLE "depositions" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "avatar" TEXT,
    "description" TEXT NOT NULL,
    "city_id" TEXT,
    "place_id" TEXT,

    CONSTRAINT "depositions_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "depositions" ADD CONSTRAINT "depositions_city_id_fkey" FOREIGN KEY ("city_id") REFERENCES "cities"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "depositions" ADD CONSTRAINT "depositions_place_id_fkey" FOREIGN KEY ("place_id") REFERENCES "places"("id") ON DELETE SET NULL ON UPDATE CASCADE;
