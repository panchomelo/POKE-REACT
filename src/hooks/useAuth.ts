import { useCallback, useState } from 'react'

/**
 * El usuario se persiste con la forma { name, email, password } porque es
 * exactamente la que guardaba el proyecto original en localStorage. Así las
 * cuentas creadas antes de la migración siguen funcionando.
 */
export type Usuario = {
  name: string
  email: string
  password: string
}

export type NuevoUsuario = {
  name: string
  email: string
  password: string
}

const CLAVE_USUARIOS = 'pokedurexUsuarios'
const CLAVE_SESION = 'pokedurexSesion'

const leerUsuarios = (): Usuario[] => {
  try {
    const guardado = localStorage.getItem(CLAVE_USUARIOS)
    return guardado ? (JSON.parse(guardado) as Usuario[]) : []
  } catch {
    return []
  }
}

const guardarUsuarios = (usuarios: Usuario[]) => {
  localStorage.setItem(CLAVE_USUARIOS, JSON.stringify(usuarios))
}

const leerSesion = (): Usuario | null => {
  try {
    const guardado = localStorage.getItem(CLAVE_SESION)
    return guardado ? (JSON.parse(guardado) as Usuario) : null
  } catch {
    return null
  }
}

export type ResultadoRegistro = 'creado' | 'duplicado'

export const useAuth = () => {
  const [usuario, setUsuario] = useState<Usuario | null>(leerSesion)

  const registrar = useCallback((datos: NuevoUsuario): ResultadoRegistro => {
    const usuarios = leerUsuarios()

    if (usuarios.some((item) => item.email === datos.email)) {
      return 'duplicado'
    }

    guardarUsuarios([...usuarios, datos])
    return 'creado'
  }, [])

  const iniciarSesion = useCallback(
    (email: string, password: string): boolean => {
      const encontrado = leerUsuarios().find(
        (item) => item.email === email && item.password === password,
      )

      if (!encontrado) {
        return false
      }

      localStorage.setItem(CLAVE_SESION, JSON.stringify(encontrado))
      setUsuario(encontrado)
      return true
    },
    [],
  )

  const cerrarSesion = useCallback(() => {
    localStorage.removeItem(CLAVE_SESION)
    setUsuario(null)
  }, [])

  return { usuario, registrar, iniciarSesion, cerrarSesion }
}
