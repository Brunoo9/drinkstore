/*
  Warnings:

  - The primary key for the `usuario` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `idusuairo` on the `usuario` table. All the data in the column will be lost.
  - Added the required column `idusuario` to the `usuario` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `orden` DROP FOREIGN KEY `idcliente`;

-- AlterTable
ALTER TABLE `usuario` DROP PRIMARY KEY,
    DROP COLUMN `idusuairo`,
    ADD COLUMN `idusuario` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`idusuario`);

-- AddForeignKey
ALTER TABLE `orden` ADD CONSTRAINT `idcliente` FOREIGN KEY (`cliente`) REFERENCES `usuario`(`idusuario`) ON DELETE NO ACTION ON UPDATE NO ACTION;
