import { Link, routes } from '@redwoodjs/router'

type InventarioLayoutProps = {
  children?: React.ReactNode
}

const InventarioLayout = ({ children }: InventarioLayoutProps) => {
  return <>
    <header>
      <h1>
        <Link to={routes.inicio()}>Redwood Blog</Link>
      </h1>
      <nav>
        <ul>
          <li>
            <Link to={routes.inicio()}>Home</Link>
          </li>
        </ul>
      </nav>
    </header>
    <main>{children}</main>
  </>
}

export default InventarioLayout
