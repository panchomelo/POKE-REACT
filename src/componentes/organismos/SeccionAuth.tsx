import MensajeAuth from '../atomos/MensajeAuth'
import FormularioLogin from '../moleculas/FormularioLogin'
import FormularioRegistro from '../moleculas/FormularioRegistro'
import PestanasAuth from '../moleculas/PestanasAuth'
import type { VistaAuth } from '../moleculas/PestanasAuth'
import estilos from './SeccionAuth.module.css'

type Props = {
  vista: VistaAuth
  mensaje: {
    texto: string
    exito: boolean
  }
  onCambiarVista: (vista: VistaAuth) => void
  onIniciarSesion: (email: string, contrasena: string) => boolean
  onRegistrarse: (
    nombre: string,
    email: string,
    contrasena: string,
  ) => boolean
}

const SeccionAuth = ({
  vista,
  mensaje,
  onCambiarVista,
  onIniciarSesion,
  onRegistrarse,
}: Props) => {
  return (
    <section className={estilos.seccion}>
      <div className={estilos.tarjeta}>
        <PestanasAuth vista={vista} onCambiarVista={onCambiarVista} />

        {vista === 'login' ? (
          <FormularioLogin onIniciarSesion={onIniciarSesion} />
        ) : (
          <FormularioRegistro onRegistrarse={onRegistrarse} />
        )}

        <MensajeAuth texto={mensaje.texto} exito={mensaje.exito} />
      </div>
    </section>
  )
}

export default SeccionAuth
