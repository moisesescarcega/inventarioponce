import type { FindHerramientas } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Herramientas from 'src/components/Herramienta/Herramientas'

export const QUERY = gql`
  query FindHerramientas {
    herramientas {
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

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No herramientas yet. '}
      <Link
        to={routes.newHerramienta()}
        className="rw-link"
      >
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ herramientas }: CellSuccessProps<FindHerramientas>) => {
  return <Herramientas herramientas={herramientas} />
}
