import { Outlet } from 'react-router-dom'
import { useAuth } from '../../contextos/authContexto'
import Encabezado from './Encabezado'
import PiePagina from './PiePagina'
import ScrollAlInicio from './ScrollAlInicio'

const Layout = () => {
  const { usuario, cerrarSesion } = useAuth()

  return (
    <>
      <ScrollAlInicio />
      <Encabezado usuario={usuario} onCerrarSesion={cerrarSesion} />
      <Outlet />
      <PiePagina />
    </>
  )
}

export default Layout
