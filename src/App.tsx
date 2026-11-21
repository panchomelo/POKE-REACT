import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './componentes/organismos/Layout'
import RutaProtegida from './componentes/organismos/RutaProtegida'
import RutaSoloInvitados from './componentes/organismos/RutaSoloInvitados'
import AdminFavoritos from './paginas/AdminFavoritos'
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

        <Route element={<RutaProtegida rolRequerido="ADMIN" />}>
          <Route path="/admin/favoritos" element={<AdminFavoritos />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}

export default App
