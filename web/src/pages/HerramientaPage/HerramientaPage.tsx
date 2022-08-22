import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const HerramientaPage = () => {
  return (
    <>
      <MetaTags title="Herramienta" description="Herramienta page" />

      <h1>HerramientaPage</h1>
      <p>
        Find me in <code>./web/src/pages/HerramientaPage/HerramientaPage.tsx</code>
      </p>
      <p>
        My default route is named <code>herramienta</code>, link to me with `
        <Link to={routes.herramienta()}>Herramienta</Link>`
      </p>
    </>
  )
}

export default HerramientaPage
