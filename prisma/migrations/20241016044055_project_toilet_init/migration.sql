-- AlterTable
ALTER TABLE `landmark` ADD COLUMN `userId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Landmark` ADD CONSTRAINT `Landmark_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
