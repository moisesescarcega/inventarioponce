import {
  materials,
  material,
  createMaterial,
  updateMaterial,
  deleteMaterial,
} from './materials'
import type { StandardScenario } from './materials.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('materials', () => {
  scenario('returns all materials', async (scenario: StandardScenario) => {
    const result = await materials()

    expect(result.length).toEqual(Object.keys(scenario.material).length)
  })

  scenario('returns a single material', async (scenario: StandardScenario) => {
    const result = await material({ id: scenario.material.one.id })

    expect(result).toEqual(scenario.material.one)
  })

  scenario('creates a material', async () => {
    const result = await createMaterial({
      input: {
        descripcion: 'String',
        tipo: 'String',
        entradas: 8198946,
        salidas: 7746873,
        existencias: 2586818,
        propiedad: 'String',
        notas: 'String',
      },
    })

    expect(result.descripcion).toEqual('String')
    expect(result.tipo).toEqual('String')
    expect(result.entradas).toEqual(8198946)
    expect(result.salidas).toEqual(7746873)
    expect(result.existencias).toEqual(2586818)
    expect(result.propiedad).toEqual('String')
    expect(result.notas).toEqual('String')
  })

  scenario('updates a material', async (scenario: StandardScenario) => {
    const original = await material({ id: scenario.material.one.id })
    const result = await updateMaterial({
      id: original.id,
      input: { descripcion: 'String2' },
    })

    expect(result.descripcion).toEqual('String2')
  })

  scenario('deletes a material', async (scenario: StandardScenario) => {
    const original = await deleteMaterial({ id: scenario.material.one.id })
    const result = await material({ id: original.id })

    expect(result).toEqual(null)
  })
})
