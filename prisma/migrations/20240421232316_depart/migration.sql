/*
  Warnings:

  - Added the required column `profile` to the `Attendance` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `Attendance` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Attendance` ADD COLUMN `profile` VARCHAR(191) NOT NULL,
    ADD COLUMN `status` VARCHAR(191) NOT NULL;
