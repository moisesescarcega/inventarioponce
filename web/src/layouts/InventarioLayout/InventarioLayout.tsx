import { Link, routes } from '@redwoodjs/router'

type InventarioLayoutProps = {
  children?: React.ReactNode
}

const InventarioLayout = ({ children }: InventarioLayoutProps) => {
  return <>
    <header>
      <h1>
        <Link to={routes.inicio()}>Inventario</Link>
      </h1>
      <nav>
        <ul>
          <li>
            <Link to={routes.newHerramienta()} className="rw-button rw-button-green">Registrar Herramientas</Link>
          </li>
          <li>
            <Link to={routes.newMaterial()} className="rw-button rw-button-blue">Registrar Materiales</Link>
          </li>
        </ul>
      </nav>
    </header>
    <main>{children}</main>
  </>
}

export default InventarioLayout
