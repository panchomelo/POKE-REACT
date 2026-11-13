import Boton from '../atomos/Boton'
import estilos from './PestanasAuth.module.css'

export type VistaAuth = 'login' | 'registro'

type Props = {
  vista: VistaAuth
  onCambiarVista: (vista: VistaAuth) => void
}

const PestanasAuth = ({ vista, onCambiarVista }: Props) => {
  return (
    <div className={estilos.pestanas}>
      <Boton
        variante="pestana"
        activo={vista === 'login'}
        onClick={() => onCambiarVista('login')}
      >
        Iniciar sesión
      </Boton>
      <Boton
        variante="pestana"
        activo={vista === 'registro'}
        onClick={() => onCambiarVista('registro')}
      >
        Registrarse
      </Boton>
    </div>
  )
}

export default PestanasAuth
