import type {
  NuevoUsuario,
  RespuestaAuth,
  Usuario,
} from '../contextos/authContexto'
import type { Favorito, FavoritoAdmin } from '../contextos/favoritosContexto'

const API_URL = (
  import.meta.env.VITE_API_URL ?? 'http://localhost:8080'
).replace(/\/$/, '')

type Metodo = 'GET' | 'POST' | 'PUT' | 'DELETE'

interface OpcionesSolicitud {
  metodo?: Metodo
  cuerpo?: unknown
  token?: string
}

export class ErrorApi extends Error {
  readonly status: number

  constructor(status: number, message: string) {
    super(message)
    this.name = 'ErrorApi'
    this.status = status
  }
}

const leerMensaje = (valor: unknown): string | null => {
  if (typeof valor !== 'object' || valor === null || !('message' in valor)) {
    return null
  }

  return typeof valor.message === 'string' ? valor.message : null
}

const solicitar = async <T>(
  ruta: string,
  { metodo = 'GET', cuerpo, token }: OpcionesSolicitud = {},
): Promise<T> => {
  const headers: Record<string, string> = {
    Accept: 'application/json',
  }

  if (cuerpo !== undefined) {
    headers['Content-Type'] = 'application/json'
  }

  if (token) {
    headers.Authorization = `Bearer ${token}`
  }

  let respuesta: Response

  try {
    respuesta = await fetch(`${API_URL}${ruta}`, {
      method: metodo,
      headers,
      body: cuerpo !== undefined ? JSON.stringify(cuerpo) : undefined,
    })
  } catch {
    throw new ErrorApi(0, 'No se pudo conectar con el servidor')
  }

  if (respuesta.status === 204) {
    return undefined as T
  }

  const texto = await respuesta.text()
  let datos: unknown = null

  if (texto) {
    try {
      datos = JSON.parse(texto)
    } catch {
      datos = null
    }
  }

  if (!respuesta.ok) {
    throw new ErrorApi(
      respuesta.status,
      leerMensaje(datos) ?? 'No se pudo completar la solicitud',
    )
  }

  return datos as T
}

export const registrarUsuario = (datos: NuevoUsuario): Promise<Usuario> =>
  solicitar<Usuario>('/api/auth/register', {
    metodo: 'POST',
    cuerpo: datos,
  })

export const iniciarSesionApi = (
  email: string,
  password: string,
): Promise<RespuestaAuth> =>
  solicitar<RespuestaAuth>('/api/auth/login', {
    metodo: 'POST',
    cuerpo: { email, password },
  })

export const obtenerPerfil = (token: string): Promise<Usuario> =>
  solicitar<Usuario>('/api/auth/me', { token })

export const listarFavoritos = (token: string): Promise<Favorito[]> =>
  solicitar<Favorito[]>('/api/favorites', { token })

export const listarTodosFavoritos = (token: string): Promise<FavoritoAdmin[]> =>
  solicitar<FavoritoAdmin[]>('/api/favorites/all', { token })

export const agregarFavorito = (
  token: string,
  pokemonId: number,
  alias?: string,
): Promise<Favorito> =>
  solicitar<Favorito>('/api/favorites', {
    metodo: 'POST',
    token,
    cuerpo: { pokemonId, alias },
  })

export const actualizarFavorito = (
  token: string,
  id: number,
  alias: string,
): Promise<Favorito> =>
  solicitar<Favorito>(`/api/favorites/${id}`, {
    metodo: 'PUT',
    token,
    cuerpo: { alias },
  })

export const eliminarFavorito = (token: string, id: number): Promise<void> =>
  solicitar<void>(`/api/favorites/${id}`, {
    metodo: 'DELETE',
    token,
  })

export const mensajeDeError = (error: unknown): string =>
  error instanceof ErrorApi
    ? error.message
    : 'No se pudo conectar con el servidor'
