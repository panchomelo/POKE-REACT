import type { ReactNode } from 'react'
import estilos from './Boton.module.css'

export type VarianteBoton = 'accion' | 'pestana' | 'enviar' | 'sesion'

type Props = {
  children: ReactNode
  variante: VarianteBoton
  type?: 'button' | 'submit'
  activo?: boolean
  onClick?: () => void
}

const Boton = ({
  children,
  variante,
  type = 'button',
  activo = false,
  onClick,
}: Props) => {
  const clases = [estilos.boton, estilos[variante]]

  if (activo) {
    clases.push(estilos.activo)
  }

  return (
    <button type={type} className={clases.join(' ')} onClick={onClick}>
      {children}
    </button>
  )
}

export default Boton
