import type { ReactNode } from 'react'
import MensajeAuth from '../atomos/MensajeAuth'
import PestanasAuth from '../moleculas/PestanasAuth'
import type { VistaAuth } from '../moleculas/PestanasAuth'
import estilos from './LayoutAuth.module.css'

interface Props {
  vista: VistaAuth
  mensaje: {
    texto: string
    exito: boolean
  }
  children: ReactNode
}

const LayoutAuth = ({ vista, mensaje, children }: Props) => {
  return (
    <section className={`card p-3 p-md-4 ${estilos.tarjeta}`}>
      <div className="card-body p-0">
        <PestanasAuth vista={vista} />

        {children}

        <MensajeAuth texto={mensaje.texto} exito={mensaje.exito} />
      </div>
    </section>
  )
}

export default LayoutAuth
