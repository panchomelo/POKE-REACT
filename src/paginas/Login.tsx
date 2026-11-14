import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../contextos/authContexto'
import FormularioLogin from '../componentes/organismos/FormularioLogin'
import LayoutAuth from '../componentes/organismos/LayoutAuth'

interface EstadoNavegacion {
  desde?: {
    pathname?: string
  }
  mensaje?: string
}

const Login = () => {
  const { iniciarSesion } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const estado = location.state as EstadoNavegacion | null

  const [mensaje, setMensaje] = useState({
    texto: estado?.mensaje ?? '',
    exito: Boolean(estado?.mensaje),
  })

  const manejarLogin = (email: string, contrasena: string) => {
    if (!iniciarSesion(email, contrasena)) {
      setMensaje({
        texto: 'Correo o contraseña incorrectos.',
        exito: false,
      })
      return false
    }

    alert('Datos ingresados correctamente')

    const destino = estado?.desde?.pathname ?? '/'
    navigate(destino, { replace: true })
    return true
  }

  return (
    <main className="container-xxl py-4 py-md-5">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5">
          <LayoutAuth vista="login" mensaje={mensaje}>
            <FormularioLogin onIniciarSesion={manejarLogin} />
          </LayoutAuth>
        </div>
      </div>
    </main>
  )
}

export default Login
