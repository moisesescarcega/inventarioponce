import HerramientaCell from 'src/components/Herramienta/HerramientaCell'

type HerramientaPageProps = {
  id: string
}

const HerramientaPage = ({ id }: HerramientaPageProps) => {
  return <HerramientaCell id={id} />
}

export default HerramientaPage
