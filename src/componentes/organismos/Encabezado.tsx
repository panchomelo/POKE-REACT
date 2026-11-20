import { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import type { Usuario } from '../../contextos/authContexto'
import PokeballLogo from '../atomos/PokeballLogo'
import PanelSesion from '../moleculas/PanelSesion'
import estilos from './Encabezado.module.css'

interface Props {
  usuario: Usuario | null
  onCerrarSesion: () => void
}

const clasesEnlace = ({ isActive }: { isActive: boolean }) =>
  ['nav-link', estilos.enlace, isActive ? estilos.activo : '']
    .filter(Boolean)
    .join(' ')

const Encabezado = ({ usuario, onCerrarSesion }: Props) => {
  const { pathname } = useLocation()
  const [menuAbierto, setMenuAbierto] = useState(false)

  const cerrarMenu = () => setMenuAbierto(false)

  return (
    <header
      className={`text-center position-relative py-4 px-3 px-md-4 ${estilos.encabezado}`}
    >
      <nav
        className={`navbar navbar-expand-md ${estilos.barra}`}
        aria-label="Navegación principal"
      >
        <div className="container-fluid p-0">
          <NavLink
            to="/"
            end
            className={`navbar-brand ${estilos.marca}`}
            onClick={cerrarMenu}
          >
            Pokédex Kanto
          </NavLink>

          <button
            type="button"
            className={`navbar-toggler ${estilos.toggler}`}
            aria-controls="menuPrincipal"
            aria-expanded={menuAbierto}
            aria-label={menuAbierto ? 'Cerrar menú' : 'Abrir menú'}
            onClick={() => setMenuAbierto((abierto) => !abierto)}
          >
            <span className={estilos.iconoMenu} aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
          </button>

          <div
            className={`collapse navbar-collapse ${menuAbierto ? 'show' : ''}`}
            id="menuPrincipal"
          >
            <ul className="navbar-nav ms-auto align-items-center gap-2">
              <li className="nav-item">
                <NavLink to="/" end className={clasesEnlace} onClick={cerrarMenu}>
                  Inicio
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/pokedex"
                  className={({ isActive }) =>
                    clasesEnlace({
                      isActive: isActive || pathname.startsWith('/pokemon/'),
                    })
                  }
                  onClick={cerrarMenu}
                >
                  Pokédex
                </NavLink>
              </li>

              {!usuario && pathname !== '/login' && (
                <li className="nav-item">
                  <NavLink
                    to="/login"
                    className={clasesEnlace}
                    onClick={cerrarMenu}
                  >
                    Iniciar sesión
                  </NavLink>
                </li>
              )}

              {!usuario && pathname !== '/registro' && (
                <li className="nav-item">
                  <NavLink
                    to="/registro"
                    className={clasesEnlace}
                    onClick={cerrarMenu}
                  >
                    Registrarse
                  </NavLink>
                </li>
              )}

              {usuario && (
                <li className="nav-item">
                  <PanelSesion
                    nombre={usuario.name}
                    onCerrarSesion={() => {
                      cerrarMenu()
                      onCerrarSesion()
                    }}
                  />
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>

      <PokeballLogo />

      <h1 className={estilos.titulo}>POKEDUREX</h1>

      <p className={estilos.subtitulo}>
        PRIMERA GENERACIÓN · KANTO · #001 — #151
      </p>
    </header>
  )
}

export default Encabezado
