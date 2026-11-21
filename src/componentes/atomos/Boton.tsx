import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import estilos from './Boton.module.css'

type VarianteBoton = 'accion' | 'pestana' | 'enviar' | 'sesion' | 'ver'

interface Props {
  children: ReactNode
  variante: VarianteBoton
  type?: 'button' | 'submit'
  activo?: boolean
  ariaLabel?: string
  to?: string
  onClick?: () => void
  disabled?: boolean
}

const clasesBootstrap: Record<VarianteBoton, string> = {
  accion: 'btn btn-light',
  pestana: 'btn btn-outline-dark',
  enviar: 'btn btn-dark',
  sesion: 'btn btn-light',
  ver: 'btn btn-dark',
}

const Boton = ({
  children,
  variante,
  type = 'button',
  activo = false,
  ariaLabel,
  to,
  onClick,
  disabled = false,
}: Props) => {
  const clases = [clasesBootstrap[variante], estilos.boton, estilos[variante]]

  if (activo) {
    clases.push(estilos.activo)
  }

  if (to) {
    return (
      <Link
        to={to}
        className={clases.join(' ')}
        aria-label={ariaLabel}
        aria-disabled={disabled || undefined}
        onClick={onClick}
      >
        {children}
      </Link>
    )
  }

  return (
    <button
      type={type}
      className={clases.join(' ')}
      aria-label={ariaLabel}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Boton
