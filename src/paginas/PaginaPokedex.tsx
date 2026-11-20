import ListaPokemon from '../componentes/organismos/ListaPokemon'
import estilos from './PaginaPokedex.module.css'

const PaginaPokedex = () => {
  return (
    <main className="container-xxl py-4 py-md-5">
      <section
        className={estilos.cabecera}
        aria-labelledby="titulo-pokedex"
      >
        <h2 id="titulo-pokedex" className={estilos.titulo}>
          Pokédex Kanto
        </h2>

        <p className={estilos.texto}>
          151 Pokémon de la primera generación. Pulsa <strong>Ver</strong> para
          abrir la ficha de cada uno.
        </p>
      </section>

      <ListaPokemon />
    </main>
  )
}

export default PaginaPokedex
