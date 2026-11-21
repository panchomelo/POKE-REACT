import { useState } from 'react'
import type { FormEvent } from 'react'
import { useAuth } from '../../contextos/authContexto'
import { useFavoritos } from '../../contextos/favoritosContexto'
import type { Favorito } from '../../contextos/favoritosContexto'
import { pokemones } from '../../datos/pokemon'
import Boton from '../atomos/Boton'
import TarjetaPokemon from '../moleculas/TarjetaPokemon'
import estilos from './SeccionFavoritos.module.css'

const SeccionFavoritos = () => {
  const { usuario } = useAuth()
  const {
    favoritos,
    cargando,
    error,
    alternarFavorito,
    actualizarAlias,
  } = useFavoritos()
  const [guardandoId, setGuardandoId] = useState<number | null>(null)
  const [editandoId, setEditandoId] = useState<number | null>(null)
  const [alias, setAlias] = useState('')
  const [guardandoAlias, setGuardandoAlias] = useState(false)

  const quitarFavorito = async (favorito: Favorito) => {
    setGuardandoId(favorito.pokemonId)

    try {
      await alternarFavorito(favorito.pokemonId)
    } catch {
      // El contexto de favoritos ya muestra el mensaje de error.
    } finally {
      setGuardandoId(null)
    }
  }

  const iniciarEdicion = (favorito: Favorito) => {
    setEditandoId(favorito.id)
    setAlias(favorito.alias ?? '')
  }

  const cancelarEdicion = () => {
    setEditandoId(null)
    setAlias('')
  }

  const guardarAlias = async (
    evento: FormEvent<HTMLFormElement>,
    id: number,
  ) => {
    evento.preventDefault()
    setGuardandoAlias(true)

    try {
      await actualizarAlias(id, alias)
      cancelarEdicion()
    } catch {
      // El contexto de favoritos ya muestra el mensaje de error.
    } finally {
      setGuardandoAlias(false)
    }
  }

  const favoritosVisibles = favoritos
    .map((favorito) => ({
      favorito,
      indice: favorito.pokemonId - 1,
    }))
    .filter(({ indice }) => indice >= 0 && indice < pokemones.length)

  return (
    <section className={estilos.seccion} aria-labelledby="titulo-favoritos">
      <div className={estilos.cabecera}>
        <p className={estilos.etiqueta}>Tu colección</p>
        <h2 id="titulo-favoritos" className={estilos.titulo}>
          Tus favoritos
        </h2>
        <p className={estilos.texto}>
          Los Pokémon que marcaste con la estrella aparecen aquí.
        </p>
      </div>

      {!usuario && (
        <div className={estilos.estado}>
          <p>Inicia sesión para guardar y ver tus Pokémon favoritos.</p>
          <div className={estilos.accion}>
            <Boton variante="accion" to="/login">
              Iniciar sesión
            </Boton>
          </div>
        </div>
      )}

      {usuario && cargando && (
        <p className={estilos.estado} role="status">
          Cargando favoritos...
        </p>
      )}

      {usuario && !cargando && error && (
        <p className="alert alert-danger" role="alert">
          {error}
        </p>
      )}

      {usuario && !cargando && favoritosVisibles.length === 0 && (
        <div className={estilos.estado}>
          <p>Todavía no tienes favoritos.</p>
          <div className={estilos.accion}>
            <Boton variante="accion" to="/pokedex">
              Explorar la Pokédex
            </Boton>
          </div>
        </div>
      )}

      {usuario && favoritosVisibles.length > 0 && (
        <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 row-cols-xxl-6 g-3 g-md-4">
          {favoritosVisibles.map(({ favorito, indice }) => {
            const pokemon = pokemones[indice]
            const numero = indice + 1

            return (
              <div className="col" key={favorito.id}>
                <div className="d-flex flex-column gap-2 h-100">
                  <TarjetaPokemon
                    pokemon={pokemon}
                    numero={numero}
                    favorito
                    onAlternarFavorito={() => {
                      void quitarFavorito(favorito)
                    }}
                    guardandoFavorito={guardandoId === favorito.pokemonId}
                  />

                  <div className={estilos.aliasPanel}>
                    {editandoId === favorito.id ? (
                      <form
                        className="d-flex align-items-center gap-1"
                        onSubmit={(evento) => {
                          void guardarAlias(evento, favorito.id)
                        }}
                      >
                        <input
                          className={`form-control ${estilos.inputAlias}`}
                          type="text"
                          value={alias}
                          maxLength={100}
                          placeholder="Apodo"
                          aria-label={`Apodo para ${pokemon.nombre}`}
                          onChange={(evento) => setAlias(evento.target.value)}
                          autoFocus
                        />

                        <Boton
                          variante="sesion"
                          type="submit"
                          disabled={guardandoAlias}
                        >
                          OK
                        </Boton>

                        <Boton
                          variante="sesion"
                          onClick={cancelarEdicion}
                          disabled={guardandoAlias}
                        >
                          X
                        </Boton>
                      </form>
                    ) : (
                      <>
                        <span className={estilos.alias}>
                          {favorito.alias ?? 'Sin apodo'}
                        </span>

                        <Boton
                          variante="sesion"
                          onClick={() => iniciarEdicion(favorito)}
                        >
                          Apodo
                        </Boton>
                      </>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </section>
  )
}

export default SeccionFavoritos
