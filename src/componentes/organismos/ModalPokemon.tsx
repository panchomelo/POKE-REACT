import type { Pokemon } from '../../datos/pokemon'
import { urlSpritePokemon } from '../../datos/pokemon'
import ImagenPokemon from '../atomos/ImagenPokemon'
import NumeroPokemon from '../atomos/NumeroPokemon'
import TipoPokemon from '../atomos/TipoPokemon'
import ModalBase from './ModalBase'
import estilos from './ModalPokemon.module.css'

export type PokemonSeleccionado = {
  pokemon: Pokemon
  numero: number
}

type Props = {
  seleccionado: PokemonSeleccionado | null
  onCerrar: () => void
}

const ModalPokemon = ({ seleccionado, onCerrar }: Props) => {
  const titulo = seleccionado
    ? `Detalles de ${seleccionado.pokemon.nombre}`
    : 'Detalles del Pokémon'

  return (
    <ModalBase
      abierto={seleccionado !== null}
      titulo={titulo}
      onCerrar={onCerrar}
      claseDialogo={estilos.dialogoGrande}
    >
      {seleccionado && (
        <article className="text-center">
          <div className={`position-relative mt-2 ${estilos.marco}`}>
            <NumeroPokemon numero={seleccionado.numero} />

            <div className={`ratio ratio-1x1 ${estilos.visor}`}>
              <ImagenPokemon
                src={urlSpritePokemon(seleccionado.numero)}
                alt={seleccionado.pokemon.nombre}
                className={estilos.sprite}
              />
            </div>
          </div>

          <h2 className={estilos.nombre}>{seleccionado.pokemon.nombre}</h2>

          <div className="d-flex flex-wrap justify-content-center gap-2">
            {seleccionado.pokemon.tipos.map((tipo) => (
              <TipoPokemon
                key={tipo.nombre}
                nombre={tipo.nombre}
                color={tipo.color}
              />
            ))}
          </div>
        </article>
      )}
    </ModalBase>
  )
}

export default ModalPokemon
