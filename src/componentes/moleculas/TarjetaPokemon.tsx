import type { Pokemon } from '../../datos/pokemon'
import { urlSpritePokemon } from '../../datos/pokemon'
import Boton from '../atomos/Boton'
import BotonFavorito from '../atomos/BotonFavorito'
import ImagenPokemon from '../atomos/ImagenPokemon'
import NumeroPokemon from '../atomos/NumeroPokemon'
import estilos from './TarjetaPokemon.module.css'

interface Props {
  pokemon: Pokemon
  numero: number
  favorito?: boolean
  onAlternarFavorito?: () => void
  guardandoFavorito?: boolean
}

const TarjetaPokemon = ({
  pokemon,
  numero,
  favorito = false,
  onAlternarFavorito,
  guardandoFavorito = false,
}: Props) => {
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

      <div className={`mt-auto pt-2 ${estilos.acciones}`}>
        <div className={estilos.contenedorVer}>
          <Boton
            variante="ver"
            to={`/pokemon/${numero}`}
            ariaLabel={`Ver detalle de ${pokemon.nombre}`}
          >
            Ver
          </Boton>
        </div>

        {onAlternarFavorito && (
          <BotonFavorito
            activo={favorito}
            nombrePokemon={pokemon.nombre}
            onClick={onAlternarFavorito}
            disabled={guardandoFavorito}
          />
        )}
      </div>
    </article>
  )
}

export default TarjetaPokemon
