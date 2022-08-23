import type { ArticlesQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'


export const QUERY = gql`
  query ArticlesQuery {
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
    },
    materials {
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

export const Loading = () => <div>Cargando...</div>

export const Empty = () => <div>Vacío</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ herramientas, materials }: CellSuccessProps<ArticlesQuery>) => {
  const DELETE_HERRAMIENTA_MUTATION = gql`
    mutation DeleteHerramientaMutation($id: String!) {
      deleteHerramienta(id: $id) {
        id
      }
    }
  `
  const MAX_STRING_LENGTH = 150
  const truncate = (text) => {
    let output = text
    if (text && text.length > MAX_STRING_LENGTH) {
      output = output.substring(0, MAX_STRING_LENGTH) + '...'
    }
    return output
  }
  const jsonTruncate = (obj) => {
    return truncate(JSON.stringify(obj, null, 2))
  }
  const [deleteHerramienta] = useMutation(DELETE_HERRAMIENTA_MUTATION, {
    onCompleted: () => {
      toast.success('Herramienta borrada')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })
  const onDeleteClick = (id) => {
    if (confirm('¿Seguro que quieres borrar la herramienta?')) {
      deleteHerramienta({ variables: { id } })
    }
  }
  return (
    <>
    {/* <ul>
      {herramientas.map((item) => {
        return <li key={item.id}>{JSON.stringify(item)}</li>
      })}
    </ul> */}
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Herramientas</th>
            <th>Tipo</th>
            <th>Entradas</th>
            <th>Salidas</th>
            <th>Existencias</th>
            <th>Propiedad</th>
            <th>Notas</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {herramientas.map((herramienta) => (
            <tr key={herramienta.id}>
              <td>{truncate(herramienta.descripcion)}</td>
              <td>{truncate(herramienta.tipo)}</td>
              <td>{truncate(herramienta.entradas)}</td>
              <td>{truncate(herramienta.salidas)}</td>
              <td>{truncate(herramienta.existencias)}</td>
              <td>{truncate(herramienta.propiedad)}</td>
              <td>{truncate(herramienta.notas)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.editHerramienta({ id: herramienta.id })}
                    title={'Edit herramienta ' + herramienta.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Editar
                  </Link>
                  <button
                    type="button"
                    title={'Delete herramienta ' + herramienta.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(herramienta.id)}
                  >
                    Borrar
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    {/* <ul>
      {materials.map((item) => {
        return <li key={item.id}>{JSON.stringify(item)}</li>
      })}
    </ul> */}
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Materiales</th>
            <th>Tipo</th>
            <th>Entradas</th>
            <th>Salidas</th>
            <th>Existencias</th>
            <th>Propiedad</th>
            <th>Notas</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {materials.map((material) => (
            <tr key={material.id}>
              <td>{truncate(material.descripcion)}</td>
              <td>{truncate(material.tipo)}</td>
              <td>{truncate(material.entradas)}</td>
              <td>{truncate(material.salidas)}</td>
              <td>{truncate(material.existencias)}</td>
              <td>{truncate(material.propiedad)}</td>
              <td>{truncate(material.notas)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.editMaterial({ id: material.id })}
                    title={'Edit material ' + material.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Editar
                  </Link>
                  <button
                    type="button"
                    title={'Delete material ' + material.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(material.id)}
                  >
                    Borrar
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  )
}
