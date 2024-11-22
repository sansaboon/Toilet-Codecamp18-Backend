/*
  Warnings:

  - You are about to alter the column `amenities` on the `landmark` table. The data in that column could be lost. The data in that column will be cast from `Enum(EnumId(1))` to `VarChar(191)`.
  - You are about to alter the column `quality` on the `landmark` table. The data in that column could be lost. The data in that column will be cast from `Enum(EnumId(2))` to `VarChar(191)`.

*/
-- AlterTable
ALTER TABLE `landmark` MODIFY `amenities` VARCHAR(191) NOT NULL,
    MODIFY `quality` VARCHAR(191) NOT NULL;
