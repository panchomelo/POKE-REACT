import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contextos/authContexto'
import { mensajeDeError } from '../servicios/api'
import FormularioRegistro from '../componentes/organismos/FormularioRegistro'
import LayoutAuth from '../componentes/organismos/LayoutAuth'

const Registro = () => {
  const { registrar } = useAuth()
  const navigate = useNavigate()

  const [mensaje, setMensaje] = useState({
    texto: '',
    exito: false,
  })

  const manejarRegistro = async (
    nombre: string,
    email: string,
    contrasena: string,
  ): Promise<boolean> => {
    try {
      await registrar({
        name: nombre,
        email,
        password: contrasena,
      })
    } catch (error) {
      setMensaje({
        texto: mensajeDeError(error),
        exito: false,
      })
      return false
    }

    alert('Cuenta creada correctamente')
    navigate('/login', {
      replace: true,
      state: { mensaje: 'Cuenta creada. Ya puedes iniciar sesión.' },
    })
    return true
  }

  return (
    <main className="container-xxl py-4 py-md-5">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5">
          <LayoutAuth vista="registro" mensaje={mensaje}>
            <FormularioRegistro onRegistrarse={manejarRegistro} />
          </LayoutAuth>
        </div>
      </div>
    </main>
  )
}

export default Registro
