import estilos from './Introduccion.module.css'

const Introduccion = () => {
  return (
    <section className={`card p-3 p-md-4 ${estilos.introduccion}`}>
      <div className="card-body p-0">
        <h2 className={`card-title ${estilos.titulo}`}>Bienvenido a Pokedurex</h2>

        <p className={`card-text ${estilos.texto}`}>
          Pokedurex es una una enciclopedia digital que contiene información
          relevante sobre los Pokémon de la primera generación. Pokedurex
          pretende dar información básica sobre los Pokémon de la primera
          generación, incluyendo su nombre, número, tipos y una imagen
          representativa de cada uno, así como también información relevante
          sobre como capturar a cada uno de estos Pokémon en los videojuegos de
          la primera generación.
        </p>
      </div>
    </section>
  )
}

export default Introduccion
