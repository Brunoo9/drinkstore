-- CreateTable
CREATE TABLE `categoria` (
    `idcategoria` INTEGER NOT NULL AUTO_INCREMENT,
    `nombrecategoria` VARCHAR(45) NOT NULL,

    PRIMARY KEY (`idcategoria`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `detalle_orden` (
    `iddetalle_orden` INTEGER NOT NULL AUTO_INCREMENT,
    `idorden` INTEGER NOT NULL,
    `idproducto` INTEGER NOT NULL,
    `cantidad` VARCHAR(45) NOT NULL,
    `precio` VARCHAR(45) NOT NULL,

    INDEX `orden_idx`(`idorden`),
    INDEX `producto_idx`(`idproducto`),
    PRIMARY KEY (`iddetalle_orden`, `idorden`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `orden` (
    `idorden` INTEGER NOT NULL AUTO_INCREMENT,
    `fechaorden` DATETIME(0) NOT NULL,
    `totalorden` VARCHAR(45) NOT NULL,
    `cliente` INTEGER NOT NULL,

    INDEX `idcliente_idx`(`cliente`),
    PRIMARY KEY (`idorden`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `producto` (
    `idproducto` INTEGER NOT NULL AUTO_INCREMENT,
    `nombreproducto` VARCHAR(45) NOT NULL,
    `descripcion` VARCHAR(45) NOT NULL,
    `precio` VARCHAR(45) NOT NULL,
    `img1` VARCHAR(45) NOT NULL,
    `img2` VARCHAR(45) NULL,
    `img3` VARCHAR(45) NULL,
    `idcategoria` INTEGER NOT NULL,

    INDEX `categoria_idx`(`idcategoria`),
    PRIMARY KEY (`idproducto`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `rol` (
    `idrol` INTEGER NOT NULL AUTO_INCREMENT,
    `nombrerol` VARCHAR(45) NOT NULL,

    PRIMARY KEY (`idrol`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `usuario` (
    `idusuairo` INTEGER NOT NULL AUTO_INCREMENT,
    `nombreusuario` VARCHAR(45) NOT NULL,
    `password` VARCHAR(45) NOT NULL,
    `email` VARCHAR(45) NULL,
    `idrol` INTEGER NOT NULL,

    INDEX `rol_idx`(`idrol`),
    PRIMARY KEY (`idusuairo`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `detalle_orden` ADD CONSTRAINT `orden` FOREIGN KEY (`idorden`) REFERENCES `orden`(`idorden`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `detalle_orden` ADD CONSTRAINT `producto` FOREIGN KEY (`idproducto`) REFERENCES `producto`(`idproducto`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `orden` ADD CONSTRAINT `idcliente` FOREIGN KEY (`cliente`) REFERENCES `usuario`(`idusuairo`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `producto` ADD CONSTRAINT `categoria` FOREIGN KEY (`idcategoria`) REFERENCES `categoria`(`idcategoria`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `usuario` ADD CONSTRAINT `rol` FOREIGN KEY (`idrol`) REFERENCES `rol`(`idrol`) ON DELETE NO ACTION ON UPDATE NO ACTION;
