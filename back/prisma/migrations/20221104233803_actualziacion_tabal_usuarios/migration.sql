/*
  Warnings:

  - Made the column `email` on table `usuario` required. This step will fail if there are existing NULL values in that column.
  - Made the column `confirm` on table `usuario` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `usuario` MODIFY `email` VARCHAR(45) NOT NULL,
    MODIFY `confirm` BOOLEAN NOT NULL;
