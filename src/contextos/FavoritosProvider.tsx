import { useCallback, useEffect, useState } from 'react'
import type { ReactNode } from 'react'
import {
  agregarFavorito,
  eliminarFavorito,
  ErrorApi,
  listarFavoritos,
  mensajeDeError,
} from '../servicios/api'
import { useAuth } from './authContexto'
import {
  FavoritosContexto,
  MAX_FAVORITOS,
  MENSAJE_LIMITE_FAVORITOS,
} from './favoritosContexto'
import type { Favorito } from './favoritosContexto'

interface Props {
  children: ReactNode
}

const FavoritosProvider = ({ children }: Props) => {
  const { token, cerrarSesion } = useAuth()
  const [favoritos, setFavoritos] = useState<Favorito[]>([])
  const [tokenCargado, setTokenCargado] = useState<string | null>(null)
  const [error, setError] = useState('')

  const cargando = Boolean(token) && tokenCargado !== token

  useEffect(() => {
    if (!token) {
      return
    }

    let activo = true

    listarFavoritos(token)
      .then((datos) => {
        if (!activo) {
          return
        }

        setFavoritos(datos)
        setError('')
        setTokenCargado(token)
      })
      .catch((problema: unknown) => {
        if (!activo) {
          return
        }

        if (problema instanceof ErrorApi && problema.status === 401) {
          cerrarSesion()
          return
        }

        setError(mensajeDeError(problema))
        setTokenCargado(token)
      })

    return () => {
      activo = false
    }
  }, [cerrarSesion, token])

  const recargar = useCallback(async () => {
    if (!token) {
      return
    }

    setTokenCargado(null)
    setError('')

    try {
      setFavoritos(await listarFavoritos(token))
      setTokenCargado(token)
    } catch (problema) {
      if (problema instanceof ErrorApi && problema.status === 401) {
        cerrarSesion()
        return
      }

      setError(mensajeDeError(problema))
      setTokenCargado(token)
    }
  }, [cerrarSesion, token])

  const manejarError = useCallback(
    (problema: unknown) => {
      if (problema instanceof ErrorApi && problema.status === 401) {
        cerrarSesion()
        return
      }

      setError(mensajeDeError(problema))
    },
    [cerrarSesion],
  )

  const alternarFavorito = useCallback(
    async (pokemonId: number) => {
      if (!token) {
        throw new ErrorApi(401, 'Debe iniciar sesión para guardar favoritos')
      }

      const existente = favoritos.find(
        (favorito) => favorito.pokemonId === pokemonId,
      )

      if (!existente && favoritos.length >= MAX_FAVORITOS) {
        const problema = new ErrorApi(409, MENSAJE_LIMITE_FAVORITOS)
        setError(problema.message)
        throw problema
      }

      try {
        if (existente) {
          await eliminarFavorito(token, existente.id)
          setFavoritos((actuales) =>
            actuales.filter((favorito) => favorito.id !== existente.id),
          )
        } else {
          const nuevo = await agregarFavorito(token, pokemonId)
          setFavoritos((actuales) => [nuevo, ...actuales])
        }

        setError('')
      } catch (problema) {
        if (problema instanceof ErrorApi && problema.status === 409) {
          setError(problema.message)
          await recargar()
          return
        }

        manejarError(problema)
        throw problema
      }
    },
    [favoritos, manejarError, recargar, token],
  )

  const visibles = token && tokenCargado === token ? favoritos : []

  const esFavorito = (pokemonId: number) =>
    visibles.some((favorito) => favorito.pokemonId === pokemonId)

  return (
    <FavoritosContexto.Provider
      value={{
        favoritos: visibles,
        cargando,
        error: token ? error : '',
        esFavorito,
        alternarFavorito,
        recargar,
      }}
    >
      {children}
    </FavoritosContexto.Provider>
  )
}

export default FavoritosProvider
