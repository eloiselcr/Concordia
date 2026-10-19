/*
  Warnings:

  - You are about to drop the `Planes` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Planes";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "planes" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "immatriculation" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "manufactured_year" INTEGER NOT NULL,
    "tank_capacity" INTEGER NOT NULL,
    "speed" DECIMAL NOT NULL,
    "passenger_capacity" INTEGER NOT NULL,
    "max_distance" DECIMAL NOT NULL,
    "plane_cost" DECIMAL NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'ACTIVE',
    "created_at" DATETIME NOT NULL,
    "updated_at" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "users" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "role" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "phone" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "planes_immatriculation_key" ON "planes"("immatriculation");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");
