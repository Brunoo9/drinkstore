-- AlterTable
ALTER TABLE `usuario` MODIFY `password` VARCHAR(191) NOT NULL,
    MODIFY `confirm` TINYINT NULL DEFAULT 0;
