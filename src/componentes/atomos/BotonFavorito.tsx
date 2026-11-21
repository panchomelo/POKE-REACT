import estilos from './BotonFavorito.module.css'

interface Props {
  activo: boolean
  nombrePokemon: string
  onClick: () => void
  disabled?: boolean
}

const BotonFavorito = ({
  activo,
  nombrePokemon,
  onClick,
  disabled = false,
}: Props) => {
  const clases = [estilos.boton, activo ? estilos.activo : '']
    .filter(Boolean)
    .join(' ')

  return (
    <button
      type="button"
      className={clases}
      aria-pressed={activo}
      aria-label={
        activo
          ? `Quitar a ${nombrePokemon} de favoritos`
          : `Agregar a ${nombrePokemon} a favoritos`
      }
      title={activo ? 'Quitar de favoritos' : 'Agregar a favoritos'}
      onClick={onClick}
      disabled={disabled}
    >
      <span aria-hidden="true">{activo ? '★' : '☆'}</span>
    </button>
  )
}

export default BotonFavorito
