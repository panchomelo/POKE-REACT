import Boton from '../atomos/Boton'

export type VistaAuth = 'login' | 'registro'

interface Props {
  vista: VistaAuth
}

const PestanasAuth = ({ vista }: Props) => {
  return (
    <div className="row g-2 mb-4">
      <div className="col">
        <Boton variante="pestana" to="/login" activo={vista === 'login'}>
          Iniciar sesión
        </Boton>
      </div>

      <div className="col">
        <Boton
          variante="pestana"
          to="/registro"
          activo={vista === 'registro'}
        >
          Registrarse
        </Boton>
      </div>
    </div>
  )
}

export default PestanasAuth
