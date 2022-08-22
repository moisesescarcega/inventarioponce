-- CreateTable
CREATE TABLE `Herramienta` (
    `id` VARCHAR(191) NOT NULL,
    `descripcion` VARCHAR(191) NOT NULL,
    `tipo` VARCHAR(191) NOT NULL,
    `entradas` INTEGER NOT NULL,
    `salidas` INTEGER NOT NULL,
    `existencias` INTEGER NOT NULL,
    `propiedad` VARCHAR(191) NOT NULL,
    `notas` VARCHAR(191) NOT NULL,
    `registro` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Material` (
    `id` VARCHAR(191) NOT NULL,
    `descripcion` VARCHAR(191) NOT NULL,
    `tipo` VARCHAR(191) NOT NULL,
    `entradas` INTEGER NOT NULL,
    `salidas` INTEGER NOT NULL,
    `existencias` INTEGER NOT NULL,
    `propiedad` VARCHAR(191) NOT NULL,
    `notas` VARCHAR(191) NOT NULL,
    `registro` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
