/*
  Warnings:

  - You are about to alter the column `precio` on the `producto` table. The data in that column could be lost. The data in that column will be cast from `VarChar(45)` to `Float`.
  - You are about to drop the `categoriaxproducto` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `idcategoria` to the `producto` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idsubcategoria` to the `producto` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `categoriaxproducto` DROP FOREIGN KEY `categoria`;

-- DropForeignKey
ALTER TABLE `categoriaxproducto` DROP FOREIGN KEY `producto2`;

-- DropForeignKey
ALTER TABLE `categoriaxproducto` DROP FOREIGN KEY `subcategoria`;

-- AlterTable
ALTER TABLE `producto` ADD COLUMN `idcategoria` INTEGER NOT NULL,
    ADD COLUMN `idsubcategoria` INTEGER NOT NULL,
    MODIFY `precio` FLOAT NOT NULL;

-- DropTable
DROP TABLE `categoriaxproducto`;

-- CreateIndex
CREATE INDEX `categoria_idx` ON `producto`(`idcategoria`);

-- CreateIndex
CREATE INDEX `subcategoria_idx` ON `producto`(`idsubcategoria`);

-- AddForeignKey
ALTER TABLE `producto` ADD CONSTRAINT `categoria` FOREIGN KEY (`idcategoria`) REFERENCES `categoria`(`idcategoria`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `producto` ADD CONSTRAINT `subcategoria` FOREIGN KEY (`idsubcategoria`) REFERENCES `subcategoria`(`idsubcategoria`) ON DELETE NO ACTION ON UPDATE NO ACTION;
