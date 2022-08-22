import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.MaterialCreateArgs>({
  material: {
    one: {
      data: {
        descripcion: 'String',
        tipo: 'String',
        entradas: 6579559,
        salidas: 5405356,
        existencias: 6535205,
        propiedad: 'String',
        notas: 'String',
      },
    },
    two: {
      data: {
        descripcion: 'String',
        tipo: 'String',
        entradas: 115108,
        salidas: 9207878,
        existencias: 4828725,
        propiedad: 'String',
        notas: 'String',
      },
    },
  },
})

export type StandardScenario = typeof standard
