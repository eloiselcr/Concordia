-- CreateTable
CREATE TABLE "Clement" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "lastname" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Clement_email_key" ON "Clement"("email");
