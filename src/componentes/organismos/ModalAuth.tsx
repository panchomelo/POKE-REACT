import { useEffect, useRef } from 'react'
import type { MouseEvent, ReactNode } from 'react'
import estilos from './ModalAuth.module.css'

type Props = {
  abierto: boolean
  titulo: string
  onCerrar: () => void
  children: ReactNode
}

const ModalAuth = ({ abierto, titulo, onCerrar, children }: Props) => {
  const contenedor = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!abierto) {
      return
    }

    const manejarTecla = (evento: KeyboardEvent) => {
      if (evento.key === 'Escape') {
        onCerrar()
      }
    }

    const overflowAnterior = document.body.style.overflow

    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', manejarTecla)
    contenedor.current?.focus()

    return () => {
      document.body.style.overflow = overflowAnterior
      document.removeEventListener('keydown', manejarTecla)
    }
  }, [abierto, onCerrar])

  if (!abierto) {
    return null
  }

  const cerrarDesdeFondo = (evento: MouseEvent<HTMLDivElement>) => {
    if (evento.target === evento.currentTarget) {
      onCerrar()
    }
  }

  return (
    <div className={estilos.fondo} onClick={cerrarDesdeFondo}>
      <div
        ref={contenedor}
        className={estilos.contenedor}
        role="dialog"
        aria-modal="true"
        aria-label={titulo}
        tabIndex={-1}
      >
        <button
          type="button"
          className={estilos.cerrar}
          onClick={onCerrar}
          aria-label="Cerrar"
        >
          ×
        </button>

        {children}
      </div>
    </div>
  )
}

export default ModalAuth
