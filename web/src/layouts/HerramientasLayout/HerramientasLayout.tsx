import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

type HerramientaLayoutProps = {
  children: React.ReactNode
}

const HerramientasLayout = ({ children }: HerramientaLayoutProps) => {
  return (
    <div className="rw-scaffold">
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link
            to={routes.inicio()}
            className="rw-link"
          >
            Herramientas
          </Link>
        </h1>
        <Link
          to={routes.newHerramienta()}
          className="rw-button rw-button-green"
        >
          <div className="rw-button-icon">+</div> Registrar herramienta
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default HerramientasLayout
