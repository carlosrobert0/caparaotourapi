-- CreateTable
CREATE TABLE "Addresses" (
    "id" TEXT NOT NULL,
    "zip_code" TEXT NOT NULL,
    "street" TEXT NOT NULL,
    "neighborhood" TEXT NOT NULL,
    "number" TEXT,

    CONSTRAINT "Addresses_pkey" PRIMARY KEY ("id")
);
