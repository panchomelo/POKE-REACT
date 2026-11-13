import Boton from '../atomos/Boton'

export type VistaAuth = 'login' | 'registro'

type Props = {
  vista: VistaAuth
  onCambiarVista: (vista: VistaAuth) => void
}

const PestanasAuth = ({ vista, onCambiarVista }: Props) => {
  return (
    <div className="row g-2 mb-4">
      <div className="col">
        <Boton
          variante="pestana"
          activo={vista === 'login'}
          onClick={() => onCambiarVista('login')}
        >
          Iniciar sesión
        </Boton>
      </div>

      <div className="col">
        <Boton
          variante="pestana"
          activo={vista === 'registro'}
          onClick={() => onCambiarVista('registro')}
        >
          Registrarse
        </Boton>
      </div>
    </div>
  )
}

export default PestanasAuth
