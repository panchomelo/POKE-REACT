import Boton from '../atomos/Boton'
import estilos from './PanelSesion.module.css'

type Props = {
  nombre: string
  onCerrarSesion: () => void
}

const PanelSesion = ({ nombre, onCerrarSesion }: Props) => {
  return (
    <div className={estilos.panel}>
      <span className={estilos.texto}>Usuario: {nombre}</span>
      <Boton variante="sesion" onClick={onCerrarSesion}>
        Cerrar sesión
      </Boton>
    </div>
  )
}

export default PanelSesion
