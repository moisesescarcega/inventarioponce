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
            <Link to={routes.inicio()}>Inicio</Link>
          </li>
          <li>
            <Link to={routes.herramientas()} className="rw-button rw-button-green">Herramientas</Link>
          </li>
          <li>
            <Link to={routes.materials()} className="rw-button rw-button-blue">Materiales</Link>
          </li>
        </ul>
      </nav>
    </header>
    <main>{children}</main>
  </>
}

export default InventarioLayout
