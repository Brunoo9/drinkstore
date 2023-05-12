-- AlterTable
ALTER TABLE `categoria` ADD COLUMN `descripcion` VARCHAR(145) NULL,
    MODIFY `nombrecategoria` VARCHAR(120) NOT NULL;

-- AlterTable
ALTER TABLE `categoriaxproducto` ADD COLUMN `idsubcategoria` INTEGER NULL;

-- CreateTable
CREATE TABLE `subcategoria` (
    `idsubcategoria` INTEGER NOT NULL AUTO_INCREMENT,
    `nombresub` VARCHAR(120) NOT NULL,
    `descripcion` VARCHAR(145) NULL,
    `idcategoria` INTEGER NOT NULL,

    INDEX `categoria2_idx`(`idcategoria`),
    PRIMARY KEY (`idsubcategoria`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE INDEX `subcategoria_idx` ON `categoriaxproducto`(`idsubcategoria`);

-- AddForeignKey
ALTER TABLE `categoriaxproducto` ADD CONSTRAINT `subcategoria` FOREIGN KEY (`idsubcategoria`) REFERENCES `subcategoria`(`idsubcategoria`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `subcategoria` ADD CONSTRAINT `categoria2` FOREIGN KEY (`idcategoria`) REFERENCES `categoria`(`idcategoria`) ON DELETE NO ACTION ON UPDATE NO ACTION;
