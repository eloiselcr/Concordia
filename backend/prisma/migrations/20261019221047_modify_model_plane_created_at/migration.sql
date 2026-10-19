-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_planes" (
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
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);
INSERT INTO "new_planes" ("created_at", "id", "immatriculation", "manufactured_year", "max_distance", "model", "passenger_capacity", "plane_cost", "speed", "status", "tank_capacity", "updated_at") SELECT "created_at", "id", "immatriculation", "manufactured_year", "max_distance", "model", "passenger_capacity", "plane_cost", "speed", "status", "tank_capacity", "updated_at" FROM "planes";
DROP TABLE "planes";
ALTER TABLE "new_planes" RENAME TO "planes";
CREATE UNIQUE INDEX "planes_immatriculation_key" ON "planes"("immatriculation");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
