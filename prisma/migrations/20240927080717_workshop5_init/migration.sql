/*
  Warnings:

  - You are about to drop the column `landmark` on the `landmark` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `landmark` table. All the data in the column will be lost.
  - Added the required column `title` to the `Landmark` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Landmark` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `landmark` DROP FOREIGN KEY `Landmark_userId_fkey`;

-- AlterTable
ALTER TABLE `landmark` DROP COLUMN `landmark`,
    DROP COLUMN `userId`,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `title` VARCHAR(191) NOT NULL,
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;
