/*
  Warnings:

  - You are about to drop the column `employeeId` on the `Attendance` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Attendance` table. All the data in the column will be lost.
  - Added the required column `employeeName` to the `Attendance` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Attendance` DROP FOREIGN KEY `Attendance_employeeId_fkey`;

-- AlterTable
ALTER TABLE `Attendance` DROP COLUMN `employeeId`,
    DROP COLUMN `userId`,
    ADD COLUMN `employeeName` VARCHAR(191) NOT NULL;
