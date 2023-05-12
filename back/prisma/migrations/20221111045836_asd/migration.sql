/*
  Warnings:

  - You are about to drop the column `cliente` on the `orden` table. All the data in the column will be lost.
  - Added the required column `idcliente` to the `orden` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `orden` DROP FOREIGN KEY `idcliente`;

-- AlterTable
ALTER TABLE `orden` DROP COLUMN `cliente`,
    ADD COLUMN `idcliente` INTEGER NOT NULL;

-- CreateIndex
CREATE INDEX `idcliente_idx` ON `orden`(`idcliente`);

-- AddForeignKey
ALTER TABLE `orden` ADD CONSTRAINT `idcliente` FOREIGN KEY (`idcliente`) REFERENCES `cliente`(`idcliente`) ON DELETE NO ACTION ON UPDATE NO ACTION;
