-- CreateTable
CREATE TABLE "ProductSpecification" (
    "name" TEXT NOT NULL PRIMARY KEY,
    "value" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    CONSTRAINT "ProductSpecification_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ProductAvaliation" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userName" TEXT NOT NULL,
    "date" DATETIME NOT NULL,
    "coment" TEXT NOT NULL,
    "score" INTEGER NOT NULL,
    "productId" TEXT NOT NULL,
    CONSTRAINT "ProductAvaliation_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "photo" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" REAL NOT NULL
);
