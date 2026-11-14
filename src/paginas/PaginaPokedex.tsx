import Introduccion from '../componentes/organismos/Introduccion'
import ListaPokemon from '../componentes/organismos/ListaPokemon'

const PaginaPokedex = () => {
  return (
    <main className="container-xxl py-4 py-md-5">
      <Introduccion />
      <ListaPokemon />
    </main>
  )
}

export default PaginaPokedex
