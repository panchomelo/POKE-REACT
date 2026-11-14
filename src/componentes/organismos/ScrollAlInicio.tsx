import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * React Router no reinicia el scroll al cambiar de ruta: si el usuario viene
 * scrolleado desde la Pokédex, la página de detalle aparece bajada y muestra
 * el footer. Este componente vuelve arriba en cada navegación.
 */
const ScrollAlInicio = () => {
  const { pathname } = useLocation()

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

export default ScrollAlInicio
