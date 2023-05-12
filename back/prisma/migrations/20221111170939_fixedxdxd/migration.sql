/*
  Warnings:

  - You are about to drop the column `idcliente` on the `orden` table. All the data in the column will be lost.
  - Added the required column `idusuario` to the `orden` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `orden` DROP FOREIGN KEY `idcliente`;

-- AlterTable
ALTER TABLE `orden` DROP COLUMN `idcliente`,
    ADD COLUMN `idusuario` INTEGER NOT NULL;

-- CreateIndex
CREATE INDEX `usuario_idx` ON `orden`(`idusuario`);

-- AddForeignKey
ALTER TABLE `orden` ADD CONSTRAINT `usuario2` FOREIGN KEY (`idusuario`) REFERENCES `usuario`(`idusuario`) ON DELETE NO ACTION ON UPDATE NO ACTION;
