import Boton from '../atomos/Boton'
import estilos from './PanelSesion.module.css'

interface Props {
  nombre: string
  onCerrarSesion: () => void
}

const PanelSesion = ({ nombre, onCerrarSesion }: Props) => {
  return (
    <div className="d-flex align-items-center justify-content-center gap-2 mt-3">
      <span className={estilos.texto}>Usuario: {nombre}</span>
      <Boton variante="sesion" onClick={onCerrarSesion}>
        Cerrar sesión
      </Boton>
    </div>
  )
}

export default PanelSesion
