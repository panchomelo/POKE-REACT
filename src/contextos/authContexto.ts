import { createContext, useContext } from 'react'

/**
 * El usuario se persiste con la forma { name, email, password } porque es
 * exactamente la que guardaba el proyecto original en localStorage. Así las
 * cuentas creadas antes de la migración siguen funcionando.
 */
export interface Usuario {
  name: string
  email: string
  password: string
}

export interface NuevoUsuario {
  name: string
  email: string
  password: string
}

export type ResultadoRegistro = 'creado' | 'duplicado'

export interface AuthContextoValor {
  usuario: Usuario | null
  registrar: (datos: NuevoUsuario) => ResultadoRegistro
  iniciarSesion: (email: string, password: string) => boolean
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
