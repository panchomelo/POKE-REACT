import { useState } from 'react'
import type { FormEvent } from 'react'
import {
  validarContrasena,
  validarCorreo,
  validarNombre,
} from '../../validaciones/auth'
import Boton from '../atomos/Boton'
import CampoFormulario from '../moleculas/CampoFormulario'
import estilos from './Formulario.module.css'

interface Props {
  onRegistrarse: (
    nombre: string,
    email: string,
    contrasena: string,
  ) => boolean
}

const FormularioRegistro = ({ onRegistrarse }: Props) => {
  const [nombre, setNombre] = useState('')
  const [correo, setCorreo] = useState('')
  const [contrasena, setContrasena] = useState('')

  const manejarEnvio = (evento: FormEvent<HTMLFormElement>) => {
    evento.preventDefault()

    const errorNombre = validarNombre(nombre)

    if (errorNombre) {
      alert(errorNombre)
      return
    }

    const errorCorreo = validarCorreo(correo)

    if (errorCorreo) {
      alert(errorCorreo)
      return
    }

    const errorContrasena = validarContrasena(contrasena)

    if (errorContrasena) {
      alert(errorContrasena)
      return
    }

    if (
      onRegistrarse(
        nombre.trim(),
        correo.trim().toLowerCase(),
        contrasena,
      )
    ) {
      setNombre('')
      setCorreo('')
      setContrasena('')
    }
  }

  return (
    <form
      className="d-flex flex-column gap-2"
      noValidate
      onSubmit={manejarEnvio}
    >
      <h2 className={estilos.titulo}>Crear cuenta</h2>

      <CampoFormulario
        id="register-name"
        name="nombre"
        etiqueta="Nombre"
        type="text"
        value={nombre}
        onChange={setNombre}
        autoComplete="name"
      />

      <CampoFormulario
        id="register-email"
        name="email"
        etiqueta="Correo electrónico"
        type="email"
        value={correo}
        onChange={setCorreo}
        autoComplete="email"
      />

      <CampoFormulario
        id="register-password"
        name="contrasena"
        etiqueta="Contraseña"
        type="password"
        value={contrasena}
        onChange={setContrasena}
        autoComplete="new-password"
      />

      <Boton variante="enviar" type="submit">
        Crear cuenta
      </Boton>
    </form>
  )
}

export default FormularioRegistro
