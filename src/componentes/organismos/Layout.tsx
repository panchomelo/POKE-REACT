import { Outlet } from 'react-router-dom'
import { useAuth } from '../../contextos/authContexto'
import NotaDespliegue from '../atomos/NotaDespliegue'
import Encabezado from './Encabezado'
import PiePagina from './PiePagina'

const Layout = () => {
  const { usuario, cerrarSesion } = useAuth()

  return (
    <>
      <Encabezado usuario={usuario} onCerrarSesion={cerrarSesion} />
      <Outlet />
      <PiePagina />
      <NotaDespliegue />
    </>
  )
}

export default Layout
