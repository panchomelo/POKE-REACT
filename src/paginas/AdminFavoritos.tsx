import { useEffect, useState } from 'react'
import { useAuth } from '../contextos/authContexto'
import type { FavoritoAdmin } from '../contextos/favoritosContexto'
import { pokemones, urlSpritePokemon } from '../datos/pokemon'
import {
  eliminarFavorito,
  ErrorApi,
  listarTodosFavoritos,
  mensajeDeError,
} from '../servicios/api'
import Boton from '../componentes/atomos/Boton'
import estilos from './AdminFavoritos.module.css'

const formatearFecha = (valor: string) =>
  valor.replace('T', ' ').slice(0, 16)

const AdminFavoritos = () => {
  const { token, cerrarSesion } = useAuth()
  const [favoritos, setFavoritos] = useState<FavoritoAdmin[]>([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState('')
  const [confirmandoId, setConfirmandoId] = useState<number | null>(null)
  const [eliminandoId, setEliminandoId] = useState<number | null>(null)

  useEffect(() => {
    if (!token) {
      return
    }

    let activo = true

    listarTodosFavoritos(token)
      .then((datos) => {
        if (!activo) {
          return
        }

        setFavoritos(datos)
        setError('')
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
      })
      .finally(() => {
        if (activo) {
          setCargando(false)
        }
      })

    return () => {
      activo = false
    }
  }, [cerrarSesion, token])

  const eliminar = async (id: number) => {
    if (!token) {
      return
    }

    setEliminandoId(id)

    try {
      await eliminarFavorito(token, id)
      setFavoritos((actuales) =>
        actuales.filter((favorito) => favorito.id !== id),
      )
      setConfirmandoId(null)
    } catch (problema) {
      if (problema instanceof ErrorApi && problema.status === 401) {
        cerrarSesion()
        return
      }

      setError(mensajeDeError(problema))
    } finally {
      setEliminandoId(null)
    }
  }

  return (
    <main className="container-xxl py-4 py-md-5">
      <section className={estilos.cabecera} aria-labelledby="titulo-admin">
        <p className={estilos.etiqueta}>Solo administradores</p>
        <h2 id="titulo-admin" className={estilos.titulo}>
          Favoritos globales
        </h2>
        <p className={estilos.texto}>
          Todos los Pokémon guardados por los usuarios. Puedes eliminar
          cualquier favorito.
        </p>
      </section>

      {cargando && (
        <p className={estilos.estado} role="status">
          Cargando favoritos...
        </p>
      )}

      {!cargando && error && (
        <p className="alert alert-danger" role="alert">
          {error}
        </p>
      )}

      {!cargando && !error && favoritos.length === 0 && (
        <p className={estilos.estado}>No hay favoritos registrados.</p>
      )}

      {!cargando && favoritos.length > 0 && (
        <div className={`table-responsive ${estilos.tablaContenedor}`}>
          <table className={`table align-middle ${estilos.tabla}`}>
            <thead>
              <tr>
                <th scope="col">Usuario</th>
                <th scope="col">Pokémon</th>
                <th scope="col">Apodo</th>
                <th scope="col">Fecha</th>
                <th scope="col" className="text-end">
                  Acción
                </th>
              </tr>
            </thead>

            <tbody>
              {favoritos.map((favorito) => {
                const indice = favorito.pokemonId - 1
                const pokemon = pokemones[indice]
                const nombre = pokemon?.nombre ?? 'Desconocido'

                return (
                  <tr key={favorito.id}>
                    <td>
                      <span className={estilos.usuario}>
                        {favorito.user.name}
                      </span>
                      <span className={estilos.correo}>
                        {favorito.user.email}
                      </span>
                    </td>

                    <td>
                      <div className="d-flex align-items-center gap-2">
                        {pokemon && (
                          <img
                            className={estilos.sprite}
                            src={urlSpritePokemon(favorito.pokemonId)}
                            alt=""
                            loading="lazy"
                          />
                        )}

                        <span>
                          #{String(favorito.pokemonId).padStart(3, '0')}{' '}
                          {nombre}
                        </span>
                      </div>
                    </td>

                    <td>{favorito.alias ?? '—'}</td>
                    <td>{formatearFecha(favorito.createdAt)}</td>

                    <td className="text-end">
                      {confirmandoId === favorito.id ? (
                        <div className="d-flex justify-content-end gap-1">
                          <Boton
                            variante="sesion"
                            onClick={() => {
                              void eliminar(favorito.id)
                            }}
                            disabled={eliminandoId === favorito.id}
                            ariaLabel={`Confirmar eliminación del favorito de ${favorito.user.name}`}
                          >
                            {eliminandoId === favorito.id
                              ? 'Eliminando...'
                              : 'Confirmar'}
                          </Boton>

                          <Boton
                            variante="sesion"
                            onClick={() => setConfirmandoId(null)}
                            disabled={eliminandoId === favorito.id}
                          >
                            Cancelar
                          </Boton>
                        </div>
                      ) : (
                        <Boton
                          variante="sesion"
                          onClick={() => setConfirmandoId(favorito.id)}
                          ariaLabel={`Eliminar el favorito de ${favorito.user.name}`}
                        >
                          Eliminar
                        </Boton>
                      )}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      )}
    </main>
  )
}

export default AdminFavoritos
