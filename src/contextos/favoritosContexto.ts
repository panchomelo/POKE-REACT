import { createContext, useContext } from 'react'

export const MAX_FAVORITOS = 6
export const MENSAJE_LIMITE_FAVORITOS =
  `Solo puedes tener hasta ${MAX_FAVORITOS} Pokémon favoritos`

export interface Favorito {
  id: number
  pokemonId: number
  createdAt: string
}

export interface FavoritoAdmin extends Favorito {
  user: {
    id: number
    name: string
    email: string
  }
}

export interface FavoritosContextoValor {
  favoritos: Favorito[]
  cargando: boolean
  error: string
  esFavorito: (pokemonId: number) => boolean
  alternarFavorito: (pokemonId: number) => Promise<void>
  recargar: () => Promise<void>
}

export const FavoritosContexto =
  createContext<FavoritosContextoValor | null>(null)

export const useFavoritos = () => {
  const contexto = useContext(FavoritosContexto)

  if (!contexto) {
    throw new Error('useFavoritos debe usarse dentro de FavoritosProvider')
  }

  return contexto
}
