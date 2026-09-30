/*
  Warnings:

  - You are about to drop the column `toilettes` on the `Macaron` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Macaron" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "prout_journee" INTEGER NOT NULL
);
INSERT INTO "new_Macaron" ("id", "prout_journee") SELECT "id", "prout_journee" FROM "Macaron";
DROP TABLE "Macaron";
ALTER TABLE "new_Macaron" RENAME TO "Macaron";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
