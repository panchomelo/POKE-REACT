import type { ColorTipo } from '../../datos/pokemon'
import estilos from './TipoPokemon.module.css'

type Props = {
  nombre: string
  color: ColorTipo | null
}

const TipoPokemon = ({ nombre, color }: Props) => {
  const clases = [estilos.tipo, color ? estilos[color] : '']
    .filter(Boolean)
    .join(' ')

  return <span className={clases}>{nombre}</span>
}

export default TipoPokemon
