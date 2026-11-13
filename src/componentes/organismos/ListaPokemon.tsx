import { pokemones } from '../../datos/pokemon'
import TarjetaPokemon from '../moleculas/TarjetaPokemon'

const ListaPokemon = () => {
  return (
    <section className="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 row-cols-xxl-6 g-3 g-md-4">
      {pokemones.map((pokemon, indice) => (
        <div className="col" key={pokemon.nombre}>
          <TarjetaPokemon pokemon={pokemon} numero={indice + 1} />
        </div>
      ))}
    </section>
  )
}

export default ListaPokemon
