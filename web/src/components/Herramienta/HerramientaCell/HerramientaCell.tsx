import type { FindHerramientaById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Herramienta from 'src/components/Herramienta/Herramienta'

export const QUERY = gql`
  query FindHerramientaById($id: String!) {
    herramienta: herramienta(id: $id) {
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

export const Empty = () => <div>Herramienta not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ herramienta }: CellSuccessProps<FindHerramientaById>) => {
  return <Herramienta herramienta={herramienta} />
}
