import Input from '../atomos/Input'
import estilos from './CampoFormulario.module.css'

interface Props {
  id: string
  name: string
  etiqueta: string
  type: 'text' | 'email' | 'password'
  value: string
  onChange: (valor: string) => void
  autoComplete?: string
}

const CampoFormulario = ({
  id,
  name,
  etiqueta,
  type,
  value,
  onChange,
  autoComplete,
}: Props) => {
  return (
    <>
      <label className={`form-label ${estilos.etiqueta}`} htmlFor={id}>
        {etiqueta}
      </label>

      <Input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={(evento) => onChange(evento.target.value)}
        autoComplete={autoComplete}
      />
    </>
  )
}

export default CampoFormulario
