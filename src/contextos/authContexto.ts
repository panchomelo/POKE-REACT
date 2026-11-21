import { createContext, useContext } from 'react'

export type Rol = 'USER' | 'ADMIN'

/**
 * La sesión guarda el token JWT y el usuario. La contraseña nunca se persiste
 * en el frontend: solo viaja al backend para registrarse o iniciar sesión.
 */
export interface Usuario {
  id: number
  name: string
  email: string
  role: Rol
}

export interface NuevoUsuario {
  name: string
  email: string
  password: string
}

export interface RespuestaAuth {
  token: string
  user: Usuario
}

export interface AuthContextoValor {
  usuario: Usuario | null
  token: string | null
  esAdmin: boolean
  cargandoSesion: boolean
  registrar: (datos: NuevoUsuario) => Promise<Usuario>
  iniciarSesion: (email: string, password: string) => Promise<Usuario>
  cerrarSesion: () => void
}

export const AuthContexto = createContext<AuthContextoValor | null>(null)

export const useAuth = () => {
  const contexto = useContext(AuthContexto)

  if (!contexto) {
    throw new Error('useAuth debe usarse dentro de AuthProvider')
  }

  return contexto
}
