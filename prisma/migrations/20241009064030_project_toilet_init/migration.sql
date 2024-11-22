/*
  Warnings:

  - Added the required column `amenities` to the `Landmark` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quality` to the `Landmark` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `landmark` ADD COLUMN `amenities` ENUM('TOILETPAPER', 'BIDETHOUSE', 'BOTH') NOT NULL,
    ADD COLUMN `quality` ENUM('VERYGOOD', 'GOOD', 'BAD') NOT NULL;
