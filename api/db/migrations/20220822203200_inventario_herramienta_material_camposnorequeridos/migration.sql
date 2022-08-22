-- AlterTable
ALTER TABLE `Herramienta` MODIFY `tipo` VARCHAR(191) NULL,
    MODIFY `entradas` INTEGER NULL,
    MODIFY `salidas` INTEGER NULL,
    MODIFY `existencias` INTEGER NULL,
    MODIFY `propiedad` VARCHAR(191) NULL,
    MODIFY `notas` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `Material` MODIFY `tipo` VARCHAR(191) NULL,
    MODIFY `entradas` INTEGER NULL,
    MODIFY `salidas` INTEGER NULL,
    MODIFY `existencias` INTEGER NULL,
    MODIFY `propiedad` VARCHAR(191) NULL,
    MODIFY `notas` VARCHAR(191) NULL;
