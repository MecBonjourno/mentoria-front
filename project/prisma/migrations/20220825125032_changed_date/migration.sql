-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ProductAvaliation" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userName" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "coment" TEXT NOT NULL,
    "score" INTEGER NOT NULL,
    "productId" TEXT NOT NULL,
    CONSTRAINT "ProductAvaliation_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_ProductAvaliation" ("coment", "date", "id", "productId", "score", "userName") SELECT "coment", "date", "id", "productId", "score", "userName" FROM "ProductAvaliation";
DROP TABLE "ProductAvaliation";
ALTER TABLE "new_ProductAvaliation" RENAME TO "ProductAvaliation";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
