import type { FormEvent } from 'react'
import Boton from '../atomos/Boton'
import CampoFormulario from '../atomos/CampoFormulario'
import estilos from './formulario.module.css'

type Props = {
  onIniciarSesion: (email: string, contrasena: string) => boolean
}

const FormularioLogin = ({ onIniciarSesion }: Props) => {
  const manejarEnvio = (evento: FormEvent<HTMLFormElement>) => {
    evento.preventDefault()

    const datos = new FormData(evento.currentTarget)
    const email = String(datos.get('email') ?? '')
    const contrasena = String(datos.get('contrasena') ?? '')

    if (onIniciarSesion(email, contrasena)) {
      evento.currentTarget.reset()
    }
  }

  return (
    <form
      className="d-flex flex-column gap-2"
      onSubmit={manejarEnvio}
    >
      <h2 className={estilos.titulo}>Acceso al sistema</h2>

      <CampoFormulario
        id="login-email"
        name="email"
        etiqueta="Correo electrónico"
        type="email"
        required
        autoComplete="email"
      />

      <CampoFormulario
        id="login-password"
        name="contrasena"
        etiqueta="Contraseña"
        type="password"
        required
        autoComplete="current-password"
      />

      <Boton variante="enviar" type="submit">
        Entrar a la Pokedurex
      </Boton>
    </form>
  )
}

export default FormularioLogin
