import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const MaterialPage = () => {
  return (
    <>
      <MetaTags title="Material" description="Material page" />

      <h1>MaterialPage</h1>
      <p>
        Find me in <code>./web/src/pages/MaterialPage/MaterialPage.tsx</code>
      </p>
      <p>
        My default route is named <code>material</code>, link to me with `
        <Link to={routes.material()}>Material</Link>`
      </p>
    </>
  )
}

export default MaterialPage
