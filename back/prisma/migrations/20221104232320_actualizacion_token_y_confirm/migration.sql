/*
  Warnings:

  - Added the required column `confirm` to the `usuario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `token` to the `usuario` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `usuario` ADD COLUMN `confirm` TINYINT NOT NULL,
    ADD COLUMN `token` VARCHAR(100) NOT NULL;
