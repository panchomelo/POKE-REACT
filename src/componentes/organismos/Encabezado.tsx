import type { Usuario } from '../../hooks/useAuth'
import PokeballLogo from '../atomos/PokeballLogo'
import PanelSesion from '../moleculas/PanelSesion'
import estilos from './Encabezado.module.css'

type Props = {
  usuario: Usuario | null
  onCerrarSesion: () => void
}

const Encabezado = ({ usuario, onCerrarSesion }: Props) => {
  return (
    <header className={estilos.encabezado}>
      <PokeballLogo />

      <h1 className={estilos.titulo}>POKEDUREX</h1>

      <p className={estilos.subtitulo}>
        PRIMERA GENERACIÓN · KANTO · #001 — #151
      </p>

      {usuario && (
        <PanelSesion nombre={usuario.name} onCerrarSesion={onCerrarSesion} />
      )}
    </header>
  )
}

export default Encabezado
