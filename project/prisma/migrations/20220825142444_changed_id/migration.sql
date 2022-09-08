/*
  Warnings:

  - The primary key for the `ProductSpecification` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The required column `id` was added to the `ProductSpecification` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ProductSpecification" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    CONSTRAINT "ProductSpecification_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_ProductSpecification" ("name", "productId", "value") SELECT "name", "productId", "value" FROM "ProductSpecification";
DROP TABLE "ProductSpecification";
ALTER TABLE "new_ProductSpecification" RENAME TO "ProductSpecification";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
