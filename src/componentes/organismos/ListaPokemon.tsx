import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../../contextos/authContexto'
import { useFavoritos } from '../../contextos/favoritosContexto'
import { pokemones } from '../../datos/pokemon'
import { ErrorApi } from '../../servicios/api'
import TarjetaPokemon from '../moleculas/TarjetaPokemon'

const ListaPokemon = () => {
  const { usuario } = useAuth()
  const { esFavorito, alternarFavorito, error } = useFavoritos()
  const navigate = useNavigate()
  const location = useLocation()
  const [guardando, setGuardando] = useState<number | null>(null)

  const manejarFavorito = async (numero: number) => {
    if (!usuario) {
      navigate('/login', {
        state: { desde: { pathname: location.pathname } },
      })
      return
    }

    setGuardando(numero)

    try {
      await alternarFavorito(numero)
    } catch (problema) {
      if (problema instanceof ErrorApi && problema.status === 401) {
        navigate('/login', {
          state: { desde: { pathname: location.pathname } },
        })
      }
    } finally {
      setGuardando(null)
    }
  }

  return (
    <>
      {error && (
        <p className="alert alert-danger" role="alert">
          {error}
        </p>
      )}

      <section className="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 row-cols-xxl-6 g-3 g-md-4">
        {pokemones.map((pokemon, indice) => {
          const numero = indice + 1

          return (
            <div className="col" key={pokemon.nombre}>
              <TarjetaPokemon
                pokemon={pokemon}
                numero={numero}
                favorito={esFavorito(numero)}
                onAlternarFavorito={() => {
                  void manejarFavorito(numero)
                }}
                guardandoFavorito={guardando === numero}
              />
            </div>
          )
        })}
      </section>
    </>
  )
}

export default ListaPokemon
