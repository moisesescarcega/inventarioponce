import {
  herramientas,
  herramienta,
  createHerramienta,
  updateHerramienta,
  deleteHerramienta,
} from './herramientas'
import type { StandardScenario } from './herramientas.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('herramientas', () => {
  scenario('returns all herramientas', async (scenario: StandardScenario) => {
    const result = await herramientas()

    expect(result.length).toEqual(Object.keys(scenario.herramienta).length)
  })

  scenario(
    'returns a single herramienta',
    async (scenario: StandardScenario) => {
      const result = await herramienta({ id: scenario.herramienta.one.id })

      expect(result).toEqual(scenario.herramienta.one)
    }
  )

  scenario('creates a herramienta', async () => {
    const result = await createHerramienta({
      input: {
        descripcion: 'String',
        tipo: 'String',
        entradas: 4924806,
        salidas: 6643143,
        existencias: 4674355,
        propiedad: 'String',
        notas: 'String',
      },
    })

    expect(result.descripcion).toEqual('String')
    expect(result.tipo).toEqual('String')
    expect(result.entradas).toEqual(4924806)
    expect(result.salidas).toEqual(6643143)
    expect(result.existencias).toEqual(4674355)
    expect(result.propiedad).toEqual('String')
    expect(result.notas).toEqual('String')
  })

  scenario('updates a herramienta', async (scenario: StandardScenario) => {
    const original = await herramienta({ id: scenario.herramienta.one.id })
    const result = await updateHerramienta({
      id: original.id,
      input: { descripcion: 'String2' },
    })

    expect(result.descripcion).toEqual('String2')
  })

  scenario('deletes a herramienta', async (scenario: StandardScenario) => {
    const original = await deleteHerramienta({
      id: scenario.herramienta.one.id,
    })
    const result = await herramienta({ id: original.id })

    expect(result).toEqual(null)
  })
})
