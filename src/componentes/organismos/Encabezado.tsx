import { useLocation } from 'react-router-dom'
import type { Usuario } from '../../contextos/authContexto'
import Boton from '../atomos/Boton'
import PokeballLogo from '../atomos/PokeballLogo'
import PanelSesion from '../moleculas/PanelSesion'
import estilos from './Encabezado.module.css'

interface Props {
  usuario: Usuario | null
  onCerrarSesion: () => void
}

const Encabezado = ({ usuario, onCerrarSesion }: Props) => {
  const { pathname } = useLocation()

  const acciones = (
    <>
      {pathname !== '/login' && (
        <Boton variante="accion" to="/login">
          Iniciar sesión
        </Boton>
      )}

      {pathname !== '/registro' && (
        <Boton variante="accion" to="/registro">
          Registrarse
        </Boton>
      )}
    </>
  )

  return (
    <header
      className={`text-center position-relative py-4 px-3 px-md-4 ${estilos.encabezado}`}
    >
      {!usuario && (
        <nav
          aria-label="Acceso"
          className="d-none d-md-flex position-absolute top-0 end-0 gap-2 m-3"
        >
          {acciones}
        </nav>
      )}

      <PokeballLogo />

      <h1 className={estilos.titulo}>POKEDUREX</h1>

      <p className={estilos.subtitulo}>
        PRIMERA GENERACIÓN · KANTO · #001 — #151
      </p>

      {usuario ? (
        <PanelSesion nombre={usuario.name} onCerrarSesion={onCerrarSesion} />
      ) : (
        <nav
          aria-label="Acceso"
          className="d-flex d-md-none justify-content-center gap-2 mt-3"
        >
          {acciones}
        </nav>
      )}
    </header>
  )
}

export default Encabezado
