import type { EditHerramientaById } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import HerramientaForm from 'src/components/Herramienta/HerramientaForm'

export const QUERY = gql`
  query EditHerramientaById($id: String!) {
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
const UPDATE_HERRAMIENTA_MUTATION = gql`
  mutation UpdateHerramientaMutation($id: String!, $input: UpdateHerramientaInput!) {
    updateHerramienta(id: $id, input: $input) {
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

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ herramienta }: CellSuccessProps<EditHerramientaById>) => {
  const [updateHerramienta, { loading, error }] = useMutation(UPDATE_HERRAMIENTA_MUTATION, {
    onCompleted: () => {
      toast.success('Herramienta actualizada')
      navigate(routes.inicio())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input, id) => {
    updateHerramienta({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Editar registro de Herramienta con ID: {herramienta.id}</h2>
      </header>
      <div className="rw-segment-main">
        <HerramientaForm herramienta={herramienta} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
