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
  return (
    <header className={estilos.encabezado}>
      <PokeballLogo />

      <h1 className={estilos.titulo}>POKEDUREX</h1>

      <p className={estilos.subtitulo}>
        PRIMERA GENERACIÓN · KANTO · #001 — #151
      </p>

      {usuario ? (
        <PanelSesion nombre={usuario.name} onCerrarSesion={onCerrarSesion} />
      ) : (
        <div className={estilos.acciones}>
          <Boton variante="accion" onClick={onAbrirLogin}>
            Iniciar sesión
          </Boton>
          <Boton variante="accion" onClick={onAbrirRegistro}>
            Registrarse
          </Boton>
        </div>
      )}
    </header>
  )
}

export default Encabezado
