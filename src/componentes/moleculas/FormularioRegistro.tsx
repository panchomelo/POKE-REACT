import type { FormEvent } from 'react'
import Boton from '../atomos/Boton'
import CampoFormulario from '../atomos/CampoFormulario'
import estilos from './formulario.module.css'

type Props = {
  onRegistrarse: (
    nombre: string,
    email: string,
    contrasena: string,
  ) => boolean
}

const FormularioRegistro = ({ onRegistrarse }: Props) => {
  const manejarEnvio = (evento: FormEvent<HTMLFormElement>) => {
    evento.preventDefault()

    const datos = new FormData(evento.currentTarget)
    const nombre = String(datos.get('nombre') ?? '')
    const email = String(datos.get('email') ?? '')
    const contrasena = String(datos.get('contrasena') ?? '')

    if (onRegistrarse(nombre, email, contrasena)) {
      evento.currentTarget.reset()
    }
  }

  return (
    <form
      className="d-flex flex-column gap-2"
      onSubmit={manejarEnvio}
    >
      <h2 className={estilos.titulo}>Crear cuenta</h2>

      <CampoFormulario
        id="register-name"
        name="nombre"
        etiqueta="Nombre"
        type="text"
        required
        autoComplete="name"
      />

      <CampoFormulario
        id="register-email"
        name="email"
        etiqueta="Correo electrónico"
        type="email"
        required
        autoComplete="email"
      />

      <CampoFormulario
        id="register-password"
        name="contrasena"
        etiqueta="Contraseña"
        type="password"
        required
        minLength={4}
        autoComplete="new-password"
      />

      <Boton variante="enviar" type="submit">
        Crear cuenta
      </Boton>
    </form>
  )
}

export default FormularioRegistro
