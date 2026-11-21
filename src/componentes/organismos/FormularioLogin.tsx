import { useState } from 'react'
import type { FormEvent } from 'react'
import { validarContrasena, validarCorreo } from '../../validaciones/auth'
import Boton from '../atomos/Boton'
import CampoFormulario from '../moleculas/CampoFormulario'
import estilos from './Formulario.module.css'

interface Props {
  onIniciarSesion: (email: string, contrasena: string) => Promise<boolean>
}

const FormularioLogin = ({ onIniciarSesion }: Props) => {
  const [correo, setCorreo] = useState('')
  const [contrasena, setContrasena] = useState('')
  const [enviando, setEnviando] = useState(false)

  const manejarEnvio = async (evento: FormEvent<HTMLFormElement>) => {
    evento.preventDefault()

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

    setEnviando(true)

    try {
      await onIniciarSesion(correo.trim().toLowerCase(), contrasena)
    } finally {
      setEnviando(false)
    }
  }

  return (
    <form
      className="d-flex flex-column gap-2"
      noValidate
      onSubmit={manejarEnvio}
    >
      <h2 className={estilos.titulo}>Acceso al sistema</h2>

      <CampoFormulario
        id="login-email"
        name="email"
        etiqueta="Correo electrónico"
        type="email"
        value={correo}
        onChange={setCorreo}
        autoComplete="email"
      />

      <CampoFormulario
        id="login-password"
        name="contrasena"
        etiqueta="Contraseña"
        type="password"
        value={contrasena}
        onChange={setContrasena}
        autoComplete="current-password"
      />

      <Boton variante="enviar" type="submit" disabled={enviando}>
        {enviando ? 'Entrando...' : 'Entrar a la Pokedurex'}
      </Boton>
    </form>
  )
}

export default FormularioLogin
