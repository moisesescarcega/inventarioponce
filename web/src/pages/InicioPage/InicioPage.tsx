import { MetaTags } from '@redwoodjs/web'
import ArticlesCell from 'src/components/ArticlesCell'

const InicioPage = () => {
  return (
    <>
      <MetaTags title="Inventario" description="Inventario" />

      <ArticlesCell />
    </>
  )
}

export default InicioPage