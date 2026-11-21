import 'bootstrap/dist/css/bootstrap.min.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import AuthProvider from './contextos/AuthProvider'
import FavoritosProvider from './contextos/FavoritosProvider'
import './estilos/global.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <FavoritosProvider>
          <App />
        </FavoritosProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
