const PATRON_CORREO = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export const validarNombre = (nombre: string): string | null => {
  if (nombre.trim() === '') {
    return 'Debe ingresar su nombre'
  }

  if (nombre.trim().length > 100) {
    return 'El nombre no puede superar los 100 caracteres'
  }

  return null
}

export const validarCorreo = (correo: string): string | null => {
  if (correo.trim() === '') {
    return 'Debe ingresar su correo'
  }

  if (correo.trim().length > 150) {
    return 'El correo no puede superar los 150 caracteres'
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

  if (contrasena.length > 72) {
    return 'La contraseña no puede superar los 72 caracteres'
  }

  return null
}
