import { useEffect, useRef } from 'react'
import type { MouseEvent, ReactNode } from 'react'
import estilos from './ModalBase.module.css'

type Props = {
  abierto: boolean
  titulo: string
  onCerrar: () => void
  children: ReactNode
  claseDialogo?: string
}

const ModalBase = ({
  abierto,
  titulo,
  onCerrar,
  children,
  claseDialogo,
}: Props) => {
  const contenedor = useRef<HTMLDivElement>(null)
  const cerrarRef = useRef(onCerrar)

  useEffect(() => {
    cerrarRef.current = onCerrar
  }, [onCerrar])

  useEffect(() => {
    if (!abierto) {
      return
    }

    const manejarTecla = (evento: KeyboardEvent) => {
      if (evento.key === 'Escape') {
        cerrarRef.current()
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
  }, [abierto])

  if (!abierto) {
    return null
  }

  const cerrarDesdeFondo = (evento: MouseEvent<HTMLDivElement>) => {
    if (!contenedor.current?.contains(evento.target as Node)) {
      onCerrar()
    }
  }

  const clasesDialogo = [
    'modal-dialog',
    'modal-dialog-centered',
    estilos.dialogo,
    claseDialogo,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={`modal d-block ${estilos.fondo}`} onClick={cerrarDesdeFondo}>
      <div className={clasesDialogo}>
        <div
          ref={contenedor}
          className={`modal-content p-3 p-md-4 ${estilos.contenedor}`}
          role="dialog"
          aria-modal="true"
          aria-label={titulo}
          tabIndex={-1}
        >
          <button
            type="button"
            className={`btn position-absolute top-0 end-0 m-2 ${estilos.cerrar}`}
            onClick={onCerrar}
            aria-label="Cerrar"
          >
            ×
          </button>

          <div className="modal-body p-0">{children}</div>
        </div>
      </div>
    </div>
  )
}

export default ModalBase
