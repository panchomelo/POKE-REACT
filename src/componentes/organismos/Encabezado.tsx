import type { Usuario } from '../../hooks/useAuth'
import Boton from '../atomos/Boton'
import PokeballLogo from '../atomos/PokeballLogo'
import PanelSesion from '../moleculas/PanelSesion'
import estilos from './Encabezado.module.css'

type Props = {
  usuario: Usuario | null
  onCerrarSesion: () => void
  onAbrirLogin: () => void
  onAbrirRegistro: () => void
}

const Encabezado = ({
  usuario,
  onCerrarSesion,
  onAbrirLogin,
  onAbrirRegistro,
}: Props) => {
  const acciones = (
    <>
      <Boton variante="accion" onClick={onAbrirLogin}>
        Iniciar sesión
      </Boton>
      <Boton variante="accion" onClick={onAbrirRegistro}>
        Registrarse
      </Boton>
    </>
  )

  return (
    <header
      className={`text-center position-relative py-4 px-3 px-md-4 ${estilos.encabezado}`}
    >
      {!usuario && (
        <div className="d-none d-md-flex position-absolute top-0 end-0 gap-2 m-3">
          {acciones}
        </div>
      )}

      <PokeballLogo />

      <h1 className={estilos.titulo}>POKEDUREX</h1>

      <p className={estilos.subtitulo}>
        PRIMERA GENERACIÓN · KANTO · #001 — #151
      </p>

      {usuario ? (
        <PanelSesion nombre={usuario.name} onCerrarSesion={onCerrarSesion} />
      ) : (
        <div className="d-flex d-md-none justify-content-center gap-2 mt-3">
          {acciones}
        </div>
      )}
    </header>
  )
}

export default Encabezado
