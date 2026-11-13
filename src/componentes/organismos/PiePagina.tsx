import estilos from './PiePagina.module.css'

const PiePagina = () => {
  return (
    <footer className={`mt-5 py-4 px-3 ${estilos.pie}`}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 text-center">
            <p className={estilos.texto}>
              <strong className={estilos.marca}>POKÉDEX KANTO</strong>
            </p>
            <p className={estilos.texto}>
              Primera Generación · Pokémon #001 — #151
            </p>
            <p className={estilos.texto}>© 2026 · Proyecto Pokédex</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default PiePagina
