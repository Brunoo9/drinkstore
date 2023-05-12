/*
  Warnings:

  - You are about to drop the `productoxcategoria` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[codproducto]` on the table `producto` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `codproducto` to the `producto` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `productoxcategoria` DROP FOREIGN KEY `categoria`;

-- DropForeignKey
ALTER TABLE `productoxcategoria` DROP FOREIGN KEY `producto2`;

-- AlterTable
ALTER TABLE `producto` ADD COLUMN `codproducto` VARCHAR(12) NOT NULL;

-- DropTable
DROP TABLE `productoxcategoria`;

-- CreateTable
CREATE TABLE `categoriaxproducto` (
    `idcategoria` INTEGER NOT NULL,
    `idproducto` INTEGER NOT NULL,

    INDEX `producto2_idx`(`idproducto`),
    PRIMARY KEY (`idcategoria`, `idproducto`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `codproducto_UNIQUE` ON `producto`(`codproducto`);

-- AddForeignKey
ALTER TABLE `categoriaxproducto` ADD CONSTRAINT `categoria` FOREIGN KEY (`idcategoria`) REFERENCES `categoria`(`idcategoria`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `categoriaxproducto` ADD CONSTRAINT `producto2` FOREIGN KEY (`idproducto`) REFERENCES `producto`(`idproducto`) ON DELETE NO ACTION ON UPDATE NO ACTION;
