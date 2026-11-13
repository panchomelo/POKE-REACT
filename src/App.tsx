import { Navigate, Route, Routes } from 'react-router-dom'
import PaginaPokedex from './paginas/PaginaPokedex'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<PaginaPokedex />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
