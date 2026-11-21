import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useAuth } from '../../contextos/authContexto'
import type { Rol } from '../../contextos/authContexto'
import Boton from '../atomos/Boton'
import estilos from './RutaProtegida.module.css'

interface Props {
  rolRequerido?: Rol
}

const RutaProtegida = ({ rolRequerido }: Props) => {
  const { usuario, cargandoSesion } = useAuth()
  const location = useLocation()

  if (cargandoSesion) {
    return (
      <main className="container-xxl py-5 text-center">
        <p className={estilos.estado} role="status">
          Validando sesión...
        </p>
      </main>
    )
  }

  if (!usuario) {
    return (
      <Navigate
        to="/login"
        replace
        state={{ desde: { pathname: location.pathname } }}
      />
    )
  }

  if (rolRequerido && usuario.role !== rolRequerido) {
    return (
      <main className="container-xxl py-4 py-md-5">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6">
            <section className={`card p-4 text-center ${estilos.mensaje}`}>
              <h2 className={estilos.titulo}>Acceso denegado</h2>
              <p className={estilos.texto}>
                Esta sección requiere el rol {rolRequerido}.
              </p>
              <Boton variante="accion" to="/">
                Volver al inicio
              </Boton>
            </section>
          </div>
        </div>
      </main>
    )
  }

  return <Outlet />
}

export default RutaProtegida
