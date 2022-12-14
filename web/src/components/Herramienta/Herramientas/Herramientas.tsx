import humanize from 'humanize-string'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Herramienta/HerramientasCell'

const DELETE_HERRAMIENTA_MUTATION = gql`
  mutation DeleteHerramientaMutation($id: String!) {
    deleteHerramienta(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

const formatEnum = (values: string | string[] | null | undefined) => {
  if (values) {
    if (Array.isArray(values)) {
      const humanizedValues = values.map((value) => humanize(value))
      return humanizedValues.join(', ')
    } else {
      return humanize(values as string)
    }
  }
}

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

const timeTag = (datetime) => {
  return (
    datetime && (
      <time dateTime={datetime} title={datetime}>
        {new Date(datetime).toUTCString()}
      </time>
    )
  )
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const HerramientasList = ({ herramientas }) => {
  const [deleteHerramienta] = useMutation(DELETE_HERRAMIENTA_MUTATION, {
    onCompleted: () => {
      toast.success('Herramienta deleted')
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
    if (confirm('Are you sure you want to delete herramienta ' + id + '?')) {
      deleteHerramienta({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Descripci??n</th>
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
  )
}

export default HerramientasList
