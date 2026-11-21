import { useCallback, useEffect, useState } from 'react'
import type { ReactNode } from 'react'
import {
  ErrorApi,
  iniciarSesionApi,
  obtenerPerfil,
  registrarUsuario,
} from '../servicios/api'
import { AuthContexto } from './authContexto'
import type { NuevoUsuario, Usuario } from './authContexto'

const CLAVE_SESION = 'pokedurexSesion'
const CLAVE_USUARIOS_ANTIGUA = 'pokedurexUsuarios'

interface Sesion {
  token: string
  usuario: Usuario
}

const esUsuario = (valor: unknown): valor is Usuario => {
  if (typeof valor !== 'object' || valor === null) {
    return false
  }

  if (
    !('id' in valor) ||
    !('name' in valor) ||
    !('email' in valor) ||
    !('role' in valor)
  ) {
    return false
  }

  return (
    typeof valor.id === 'number' &&
    typeof valor.name === 'string' &&
    typeof valor.email === 'string' &&
    (valor.role === 'USER' || valor.role === 'ADMIN')
  )
}

const esSesion = (valor: unknown): valor is Sesion => {
  if (typeof valor !== 'object' || valor === null) {
    return false
  }

  if (!('token' in valor) || !('usuario' in valor)) {
    return false
  }

  return typeof valor.token === 'string' && esUsuario(valor.usuario)
}

const leerSesion = (): Sesion | null => {
  try {
    const guardado = localStorage.getItem(CLAVE_SESION)

    if (!guardado) {
      return null
    }

    const datos: unknown = JSON.parse(guardado)

    if (!esSesion(datos)) {
      localStorage.removeItem(CLAVE_SESION)
      return null
    }

    return datos
  } catch {
    return null
  }
}

interface Props {
  children: ReactNode
}

const AuthProvider = ({ children }: Props) => {
  const [sesion, setSesion] = useState<Sesion | null>(leerSesion)
  const [cargandoSesion, setCargandoSesion] = useState(
    () => leerSesion() !== null,
  )

  useEffect(() => {
    localStorage.removeItem(CLAVE_USUARIOS_ANTIGUA)

    const guardada = leerSesion()

    if (!guardada) {
      return
    }

    let activo = true

    obtenerPerfil(guardada.token)
      .then((usuario) => {
        if (!activo) {
          return
        }

        const actualizada = { token: guardada.token, usuario }
        localStorage.setItem(CLAVE_SESION, JSON.stringify(actualizada))
        setSesion(actualizada)
      })
      .catch((error: unknown) => {
        if (!activo) {
          return
        }

        if (error instanceof ErrorApi && error.status === 401) {
          localStorage.removeItem(CLAVE_SESION)
          setSesion(null)
        }
      })
      .finally(() => {
        if (activo) {
          setCargandoSesion(false)
        }
      })

    return () => {
      activo = false
    }
  }, [])

  const registrar = useCallback(
    async (datos: NuevoUsuario): Promise<Usuario> => registrarUsuario(datos),
    [],
  )

  const iniciarSesion = useCallback(
    async (email: string, password: string): Promise<Usuario> => {
      const respuesta = await iniciarSesionApi(email, password)
      const nuevaSesion = {
        token: respuesta.token,
        usuario: respuesta.user,
      }

      localStorage.setItem(CLAVE_SESION, JSON.stringify(nuevaSesion))
      setSesion(nuevaSesion)

      return respuesta.user
    },
    [],
  )

  const cerrarSesion = useCallback(() => {
    localStorage.removeItem(CLAVE_SESION)
    setSesion(null)
  }, [])

  return (
    <AuthContexto.Provider
      value={{
        usuario: sesion?.usuario ?? null,
        token: sesion?.token ?? null,
        esAdmin: sesion?.usuario.role === 'ADMIN',
        cargandoSesion,
        registrar,
        iniciarSesion,
        cerrarSesion,
      }}
    >
      {children}
    </AuthContexto.Provider>
  )
}

export default AuthProvider
