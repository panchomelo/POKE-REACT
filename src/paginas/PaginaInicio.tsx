import Boton from '../componentes/atomos/Boton'
import estilos from './PaginaInicio.module.css'

const PaginaInicio = () => {
  return (
    <main className="container-xxl py-4 py-md-5">
      <section className={estilos.hero} aria-labelledby="titulo-inicio">
        <img
          className={estilos.imagen}
          src="/imagenes/kanto.webp"
          alt="Charizard, Pikachu y los entrenadores de Kanto"
        />

        <div className={estilos.contenido}>
          <p className={estilos.etiqueta}>Primera generación · Kanto</p>

          <h2 id="titulo-inicio" className={estilos.titulo}>
            Aventura en Kanto
          </h2>

          <p className={estilos.texto}>
            151 Pokémon te esperan. Explora la Pokédex y descubre sus tipos,
            sprites y descripciones.
          </p>

          <div className={estilos.accion}>
            <Boton variante="ver" to="/pokedex">
              Explorar la Pokédex
            </Boton>
          </div>
        </div>
      </section>
    </main>
  )
}

export default PaginaInicio
