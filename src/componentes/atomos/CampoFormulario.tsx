import estilos from './CampoFormulario.module.css'

type Props = {
  id: string
  name: string
  etiqueta: string
  type: 'text' | 'email' | 'password'
  autoComplete?: string
  required?: boolean
  minLength?: number
}

const CampoFormulario = ({
  id,
  name,
  etiqueta,
  type,
  autoComplete,
  required = false,
  minLength,
}: Props) => {
  return (
    <>
      <label className={`form-label ${estilos.etiqueta}`} htmlFor={id}>
        {etiqueta}
      </label>
      <input
        className={`form-control ${estilos.entrada}`}
        id={id}
        name={name}
        type={type}
        autoComplete={autoComplete}
        required={required}
        minLength={minLength}
      />
    </>
  )
}

export default CampoFormulario
