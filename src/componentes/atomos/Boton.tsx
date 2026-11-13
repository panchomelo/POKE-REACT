import type { ReactNode } from 'react'
import estilos from './Boton.module.css'

type VarianteBoton = 'accion' | 'pestana' | 'enviar' | 'sesion'

type Props = {
  children: ReactNode
  variante: VarianteBoton
  type?: 'button' | 'submit'
  activo?: boolean
  onClick?: () => void
}

const clasesBootstrap: Record<VarianteBoton, string> = {
  accion: 'btn btn-light',
  pestana: 'btn btn-outline-dark',
  enviar: 'btn btn-dark',
  sesion: 'btn btn-light',
}

const Boton = ({
  children,
  variante,
  type = 'button',
  activo = false,
  onClick,
}: Props) => {
  const clases = [clasesBootstrap[variante], estilos.boton, estilos[variante]]

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
