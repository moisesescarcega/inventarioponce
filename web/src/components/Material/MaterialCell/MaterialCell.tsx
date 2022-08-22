import type { FindMaterialById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Material from 'src/components/Material/Material'

export const QUERY = gql`
  query FindMaterialById($id: String!) {
    material: material(id: $id) {
      id
      descripcion
      tipo
      entradas
      salidas
      existencias
      propiedad
      notas
      registro
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Material not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ material }: CellSuccessProps<FindMaterialById>) => {
  return <Material material={material} />
}
