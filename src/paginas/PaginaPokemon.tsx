import { Navigate, useParams } from 'react-router-dom'
import Boton from '../componentes/atomos/Boton'
import FichaPokemon from '../componentes/organismos/FichaPokemon'
import { pokemones } from '../datos/pokemon'
import estilos from './PaginaPokemon.module.css'

const PaginaPokemon = () => {
  const { numero } = useParams<{ numero: string }>()
  const indice = Number(numero)

  if (!Number.isInteger(indice) || indice < 1 || indice > pokemones.length) {
    return <Navigate to="/" replace />
  }

  const pokemon = pokemones[indice - 1]

  return (
    <main className="container-xxl py-4 py-md-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-9 col-xl-8">
          <section className={`card p-3 p-md-4 ${estilos.tarjeta}`}>
            <div className="card-body p-0">
              <FichaPokemon pokemon={pokemon} numero={indice} />

              <div className="d-flex justify-content-center mt-3">
                <Boton variante="accion" to="/">
                  Volver a la Pokédex
                </Boton>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}

export default PaginaPokemon
