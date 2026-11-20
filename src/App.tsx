import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './componentes/organismos/Layout'
import RutaSoloInvitados from './componentes/organismos/RutaSoloInvitados'
import Login from './paginas/Login'
import PaginaInicio from './paginas/PaginaInicio'
import PaginaPokemon from './paginas/PaginaPokemon'
import PaginaPokedex from './paginas/PaginaPokedex'
import Registro from './paginas/Registro'

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<PaginaInicio />} />
        <Route path="/pokedex" element={<PaginaPokedex />} />
        <Route path="/pokemon/:numero" element={<PaginaPokemon />} />

        <Route element={<RutaSoloInvitados />}>
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}

export default App
