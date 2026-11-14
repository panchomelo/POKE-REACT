import type { Pokemon } from '../../datos/pokemon'
import { urlSpritePokemon } from '../../datos/pokemon'
import Boton from '../atomos/Boton'
import ImagenPokemon from '../atomos/ImagenPokemon'
import NumeroPokemon from '../atomos/NumeroPokemon'
import estilos from './TarjetaPokemon.module.css'

interface Props {
  pokemon: Pokemon
  numero: number
}

const TarjetaPokemon = ({ pokemon, numero }: Props) => {
  return (
    <article className={`card h-100 p-2 p-md-3 ${estilos.tarjeta}`}>
      <NumeroPokemon numero={numero} />

      <div
        className={`card-img-top ratio ratio-4x3 ${estilos.marco}`}
      >
        <ImagenPokemon
          src={urlSpritePokemon(numero)}
          alt={pokemon.nombre}
          className={estilos.zoom}
        />
      </div>

      <h3 className={`card-title ${estilos.nombre}`}>{pokemon.nombre}</h3>

      <div className="mt-auto pt-2">
        <Boton
          variante="ver"
          to={`/pokemon/${numero}`}
          ariaLabel={`Ver detalles de ${pokemon.nombre}`}
        >
          Ver
        </Boton>
      </div>
    </article>
  )
}

export default TarjetaPokemon
