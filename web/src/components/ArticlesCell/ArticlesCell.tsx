import type { ArticlesQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'


export const QUERY = gql`
  query ArticlesQuery {
    articlesh: herramientas {
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

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ articlesh }: CellSuccessProps<ArticlesQuery>) => {
  return (
    <ul>
      {articlesh.map((item) => {
        return <li key={item.id}>{JSON.stringify(item)}</li>
      })}
    </ul>
  )
}