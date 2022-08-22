import EditMaterialCell from 'src/components/Material/EditMaterialCell'

type MaterialPageProps = {
  id: string
}

const EditMaterialPage = ({ id }: MaterialPageProps) => {
  return <EditMaterialCell id={id} />
}

export default EditMaterialPage
