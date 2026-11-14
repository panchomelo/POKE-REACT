const PATRON_CORREO = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export const validarNombre = (nombre: string): string | null => {
  if (nombre.trim() === '') {
    return 'Debe ingresar su nombre'
  }

  return null
}

export const validarCorreo = (correo: string): string | null => {
  if (correo.trim() === '') {
    return 'Debe ingresar su correo'
  }

  if (!PATRON_CORREO.test(correo.trim())) {
    return 'Ingrese un correo válido'
  }

  return null
}

export const validarContrasena = (contrasena: string): string | null => {
  if (contrasena.trim() === '') {
    return 'Debe ingresar su contraseña'
  }

  if (contrasena.length < 8) {
    return 'La contraseña debe tener al menos 8 caracteres'
  }

  return null
}
