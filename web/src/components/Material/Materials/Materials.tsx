import humanize from 'humanize-string'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Material/MaterialsCell'

const DELETE_MATERIAL_MUTATION = gql`
  mutation DeleteMaterialMutation($id: String!) {
    deleteMaterial(id: $id) {
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

const MaterialsList = ({ materials }) => {
  const [deleteMaterial] = useMutation(DELETE_MATERIAL_MUTATION, {
    onCompleted: () => {
      toast.success('Material deleted')
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
    if (confirm('Are you sure you want to delete material ' + id + '?')) {
      deleteMaterial({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            {/* <th>Id</th> */}
            <th>Descripcion</th>
            <th>Tipo</th>
            <th>Entradas</th>
            <th>Salidas</th>
            <th>Existencias</th>
            <th>Propiedad</th>
            <th>Notas</th>
            {/* <th>Registro</th> */}
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {materials.map((material) => (
            <tr key={material.id}>
              {/* <td>{truncate(material.id)}</td> */}
              <td>{truncate(material.descripcion)}</td>
              <td>{truncate(material.tipo)}</td>
              <td>{truncate(material.entradas)}</td>
              <td>{truncate(material.salidas)}</td>
              <td>{truncate(material.existencias)}</td>
              <td>{truncate(material.propiedad)}</td>
              <td>{truncate(material.notas)}</td>
              {/* <td>{timeTag(material.registro)}</td> */}
              <td>
                <nav className="rw-table-actions">
                  {/* <Link
                    to={routes.material({ id: material.id })}
                    title={'Show material ' + material.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link> */}
                  <Link
                    to={routes.editMaterial({ id: material.id })}
                    title={'Edit material ' + material.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete material ' + material.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(material.id)}
                  >
                    Delete
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

export default MaterialsList
