/*
  Warnings:

  - You are about to drop the `Clement` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Macaron` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Clement";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Macaron";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Planes" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "immatriculation" TEXT NOT NULL,
    "model" TEXT NOT NULL
);
