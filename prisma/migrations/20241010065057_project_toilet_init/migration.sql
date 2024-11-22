/*
  Warnings:

  - Added the required column `optional` to the `Landmark` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `landmark` ADD COLUMN `optional` VARCHAR(191) NOT NULL;
