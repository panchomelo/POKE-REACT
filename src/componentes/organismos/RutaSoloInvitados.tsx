import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../../contextos/authContexto'

const RutaSoloInvitados = () => {
  const { usuario } = useAuth()

  if (usuario) {
    return <Navigate to="/" replace />
  }

  return <Outlet />
}

export default RutaSoloInvitados
