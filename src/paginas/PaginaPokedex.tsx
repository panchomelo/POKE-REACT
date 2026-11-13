import { useState } from 'react'
import NotaDespliegue from '../componentes/atomos/NotaDespliegue'
import Encabezado from '../componentes/organismos/Encabezado'
import Introduccion from '../componentes/organismos/Introduccion'
import ListaPokemon from '../componentes/organismos/ListaPokemon'
import PiePagina from '../componentes/organismos/PiePagina'
import SeccionAuth from '../componentes/organismos/SeccionAuth'
import type { VistaAuth } from '../componentes/moleculas/PestanasAuth'
import { useAuth } from '../hooks/useAuth'
import estilos from './PaginaPokedex.module.css'

const PaginaPokedex = () => {
  const { usuario, registrar, iniciarSesion, cerrarSesion } = useAuth()
  const [vista, setVista] = useState<VistaAuth>('login')
  const [mensaje, setMensaje] = useState({ texto: '', exito: false })

  const mostrarMensaje = (texto: string, error = true) => {
    setMensaje({ texto, exito: !error })
  }

  const cambiarVista = (nuevaVista: VistaAuth) => {
    setVista(nuevaVista)
    mostrarMensaje('')
  }

  const manejarLogin = (email: string, contrasena: string) => {
    const correo = email.trim().toLowerCase()

    if (!iniciarSesion(correo, contrasena)) {
      mostrarMensaje('Correo o contraseña incorrectos.')
      return false
    }

    return true
  }

  const manejarRegistro = (
    nombre: string,
    email: string,
    contrasena: string,
  ) => {
    const correo = email.trim().toLowerCase()
    const resultado = registrar({
      name: nombre.trim(),
      email: correo,
      password: contrasena,
    })

    if (resultado === 'duplicado') {
      mostrarMensaje('Ya existe una cuenta con ese correo.')
      return false
    }

    cambiarVista('login')
    mostrarMensaje('Cuenta creada. Ya puedes iniciar sesión.', false)
    return true
  }

  const manejarCerrarSesion = () => {
    cerrarSesion()
    cambiarVista('login')
  }

  return (
    <>
      <Encabezado usuario={usuario} onCerrarSesion={manejarCerrarSesion} />

      {usuario ? (
        <>
          <main className={estilos.principal}>
            <Introduccion />
            <ListaPokemon />
          </main>

          <PiePagina />
          <NotaDespliegue />
        </>
      ) : (
        <SeccionAuth
          vista={vista}
          mensaje={mensaje}
          onCambiarVista={cambiarVista}
          onIniciarSesion={manejarLogin}
          onRegistrarse={manejarRegistro}
        />
      )}
    </>
  )
}

export default PaginaPokedex
