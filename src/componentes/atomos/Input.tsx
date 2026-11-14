import type { ChangeEvent } from 'react'
import estilos from './Input.module.css'

interface Props {
  id: string
  name: string
  type: 'text' | 'email' | 'password'
  value: string
  onChange: (evento: ChangeEvent<HTMLInputElement>) => void
  autoComplete?: string
  required?: boolean
}

const Input = ({
  id,
  name,
  type,
  value,
  onChange,
  autoComplete,
  required = true,
}: Props) => {
  return (
    <input
      className={`form-control ${estilos.entrada}`}
      id={id}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      autoComplete={autoComplete}
      required={required}
      aria-required={required}
    />
  )
}

export default Input
