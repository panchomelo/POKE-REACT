import estilos from './MensajeAuth.module.css'

type Props = {
  texto: string
  exito: boolean
}

const MensajeAuth = ({ texto, exito }: Props) => {
  const clases = [estilos.mensaje, exito ? estilos.exito : '']
    .filter(Boolean)
    .join(' ')

  return (
    <p className={`pt-3 text-center ${clases}`} role="status">
      {texto}
    </p>
  )
}

export default MensajeAuth
