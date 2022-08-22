import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import HerramientaForm from 'src/components/Herramienta/HerramientaForm'

const CREATE_HERRAMIENTA_MUTATION = gql`
  mutation CreateHerramientaMutation($input: CreateHerramientaInput!) {
    createHerramienta(input: $input) {
      id
    }
  }
`

const NewHerramienta = () => {
  const [createHerramienta, { loading, error }] = useMutation(CREATE_HERRAMIENTA_MUTATION, {
    onCompleted: () => {
      toast.success('Herramienta created')
      navigate(routes.herramientas())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input) => {
    createHerramienta({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Herramienta</h2>
      </header>
      <div className="rw-segment-main">
        <HerramientaForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewHerramienta
