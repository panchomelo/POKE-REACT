import estilos from './NumeroPokemon.module.css'

type Props = {
  numero: number
}

const NumeroPokemon = ({ numero }: Props) => {
  return (
    <div className={`badge ${estilos.numero}`}>
      {`#${String(numero).padStart(3, '0')}`}
    </div>
  )
}

export default NumeroPokemon
