import EditHerramientaCell from 'src/components/Herramienta/EditHerramientaCell'

type HerramientaPageProps = {
  id: string
}

const EditHerramientaPage = ({ id }: HerramientaPageProps) => {
  return <EditHerramientaCell id={id} />
}

export default EditHerramientaPage
