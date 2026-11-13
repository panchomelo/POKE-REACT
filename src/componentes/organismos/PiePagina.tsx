import estilos from './PiePagina.module.css'

const PiePagina = () => {
  return (
    <footer className={estilos.pie}>
      <p className={estilos.texto}>
        <strong className={estilos.marca}>POKÉDEX KANTO</strong>
      </p>
      <p className={estilos.texto}>Primera Generación · Pokémon #001 — #151</p>
      <p className={estilos.texto}>© 2026 · Proyecto Pokédex</p>
    </footer>
  )
}

export default PiePagina
