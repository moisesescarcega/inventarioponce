import humanize from 'humanize-string'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

const DELETE_HERRAMIENTA_MUTATION = gql`
  mutation DeleteHerramientaMutation($id: String!) {
    deleteHerramienta(id: $id) {
      id
    }
  }
`

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

const jsonDisplay = (obj) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  )
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

const Herramienta = ({ herramienta }) => {
  const [deleteHerramienta] = useMutation(DELETE_HERRAMIENTA_MUTATION, {
    onCompleted: () => {
      toast.success('Herramienta deleted')
      navigate(routes.herramientas())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete herramienta ' + id + '?')) {
      deleteHerramienta({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">Herramienta {herramienta.id} Detail</h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{herramienta.id}</td>
            </tr><tr>
              <th>Descripcion</th>
              <td>{herramienta.descripcion}</td>
            </tr><tr>
              <th>Tipo</th>
              <td>{herramienta.tipo}</td>
            </tr><tr>
              <th>Entradas</th>
              <td>{herramienta.entradas}</td>
            </tr><tr>
              <th>Salidas</th>
              <td>{herramienta.salidas}</td>
            </tr><tr>
              <th>Existencias</th>
              <td>{herramienta.existencias}</td>
            </tr><tr>
              <th>Propiedad</th>
              <td>{herramienta.propiedad}</td>
            </tr><tr>
              <th>Notas</th>
              <td>{herramienta.notas}</td>
            </tr><tr>
              <th>Registro</th>
              <td>{timeTag(herramienta.registro)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editHerramienta({ id: herramienta.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(herramienta.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Herramienta
