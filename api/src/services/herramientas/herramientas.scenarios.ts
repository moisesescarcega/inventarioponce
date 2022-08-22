import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.HerramientaCreateArgs>({
  herramienta: {
    one: {
      data: {
        descripcion: 'String',
        tipo: 'String',
        entradas: 639271,
        salidas: 6142326,
        existencias: 2482515,
        propiedad: 'String',
        notas: 'String',
      },
    },
    two: {
      data: {
        descripcion: 'String',
        tipo: 'String',
        entradas: 2401120,
        salidas: 1558139,
        existencias: 4775664,
        propiedad: 'String',
        notas: 'String',
      },
    },
  },
})

export type StandardScenario = typeof standard
