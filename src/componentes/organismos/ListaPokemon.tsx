import { useCallback, useState } from 'react'
import { pokemones } from '../../datos/pokemon'
import TarjetaPokemon from '../moleculas/TarjetaPokemon'
import ModalPokemon from './ModalPokemon'
import type { PokemonSeleccionado } from './ModalPokemon'

const ListaPokemon = () => {
  const [seleccionado, setSeleccionado] =
    useState<PokemonSeleccionado | null>(null)

  const cerrarVista = useCallback(() => {
    setSeleccionado(null)
  }, [])

  return (
    <>
      <section className="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 row-cols-xxl-6 g-3 g-md-4">
        {pokemones.map((pokemon, indice) => (
          <div className="col" key={pokemon.nombre}>
            <TarjetaPokemon
              pokemon={pokemon}
              numero={indice + 1}
              onVer={() =>
                setSeleccionado({ pokemon, numero: indice + 1 })
              }
            />
          </div>
        ))}
      </section>

      <ModalPokemon seleccionado={seleccionado} onCerrar={cerrarVista} />
    </>
  )
}

export default ListaPokemon
