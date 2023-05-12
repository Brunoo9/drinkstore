/*
  Warnings:

  - You are about to drop the column `idcategoria` on the `producto` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `producto` DROP FOREIGN KEY `categoria`;

-- AlterTable
ALTER TABLE `producto` DROP COLUMN `idcategoria`;

-- CreateTable
CREATE TABLE `cliente` (
    `idcliente` INTEGER NOT NULL AUTO_INCREMENT,
    `nombrecliente` VARCHAR(45) NOT NULL,
    `apellidocliente` VARCHAR(45) NOT NULL,
    `fechanacimiento` DATE NOT NULL,
    `direccion` VARCHAR(45) NOT NULL,
    `telefono` VARCHAR(45) NOT NULL,
    `idusuario` INTEGER NOT NULL,

    INDEX `usuario_idx`(`idusuario`),
    PRIMARY KEY (`idcliente`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `productoxcategoria` (
    `idproducto` INTEGER NOT NULL,
    `idcategoria` INTEGER NOT NULL,

    INDEX `categoria_idx`(`idcategoria`),
    PRIMARY KEY (`idproducto`, `idcategoria`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `cliente` ADD CONSTRAINT `usuario` FOREIGN KEY (`idusuario`) REFERENCES `usuario`(`idusuario`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `productoxcategoria` ADD CONSTRAINT `categoria` FOREIGN KEY (`idcategoria`) REFERENCES `categoria`(`idcategoria`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `productoxcategoria` ADD CONSTRAINT `producto2` FOREIGN KEY (`idproducto`) REFERENCES `producto`(`idproducto`) ON DELETE NO ACTION ON UPDATE NO ACTION;
