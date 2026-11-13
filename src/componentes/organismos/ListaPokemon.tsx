import { pokemones } from '../../datos/pokemon'
import TarjetaPokemon from '../moleculas/TarjetaPokemon'
import estilos from './ListaPokemon.module.css'

const ListaPokemon = () => {
  return (
    <section className={estilos.lista}>
      {pokemones.map((pokemon, indice) => (
        <TarjetaPokemon
          key={pokemon.nombre}
          pokemon={pokemon}
          numero={indice + 1}
        />
      ))}
    </section>
  )
}

export default ListaPokemon
