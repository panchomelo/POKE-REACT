import type { Pokemon } from '../../datos/pokemon'
import { urlSpritePokemon } from '../../datos/pokemon'
import ImagenPokemon from '../atomos/ImagenPokemon'
import NumeroPokemon from '../atomos/NumeroPokemon'
import TipoPokemon from '../atomos/TipoPokemon'
import estilos from './FichaPokemon.module.css'

interface Props {
  pokemon: Pokemon
  numero: number
}

const FichaPokemon = ({ pokemon, numero }: Props) => {
  return (
    <article className="row g-4 align-items-center">
      <div className="col-12 col-md-5">
        <div className="position-relative mt-2">
          <NumeroPokemon numero={numero} />

          <div className={`ratio ratio-1x1 ${estilos.visor}`}>
            <ImagenPokemon
              src={urlSpritePokemon(numero)}
              alt={pokemon.nombre}
              className={estilos.sprite}
            />
          </div>
        </div>
      </div>

      <div className="col-12 col-md-7">
        <h2 className={`text-center text-md-start ${estilos.nombre}`}>
          {pokemon.nombre}
        </h2>

        <div className="d-flex flex-wrap justify-content-center justify-content-md-start gap-2">
          {pokemon.tipos.map((tipo) => (
            <TipoPokemon
              key={tipo.nombre}
              nombre={tipo.nombre}
              color={tipo.color}
            />
          ))}
        </div>

        <h3 className={`text-center text-md-start ${estilos.etiqueta}`}>
          Descripción
        </h3>

        <p className={estilos.descripcion}>{pokemon.descripcion}</p>
      </div>
    </article>
  )
}

export default FichaPokemon
