import type { ReactNode } from 'react'
import estilos from './Boton.module.css'

type VarianteBoton = 'accion' | 'pestana' | 'enviar' | 'sesion' | 'ver'

type Props = {
  children: ReactNode
  variante: VarianteBoton
  type?: 'button' | 'submit'
  activo?: boolean
  ariaLabel?: string
  onClick?: () => void
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
  onClick,
}: Props) => {
  const clases = [clasesBootstrap[variante], estilos.boton, estilos[variante]]

  if (activo) {
    clases.push(estilos.activo)
  }

  return (
    <button
      type={type}
      className={clases.join(' ')}
      aria-label={ariaLabel}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Boton
