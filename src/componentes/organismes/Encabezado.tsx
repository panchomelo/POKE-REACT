import { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import type { Usuario } from '../../contextos/authContexto'
import PokeballLogo from '../atomos/PokeballLogo'
import PanelSesion from '../moleculas/PanelSesion'

interface Props {
  usuario: Usuario | null
  onCerrarSesion: () => void
}

const clasesEnlace = ({ isActive }: { isActive: boolean }) =>
  ['nav-link', 'enlace', 'activo'].filter(Boolean).join(' ')

const Encabezado = ({ usuario, onCerrarSesion }: Props) => {
  const { pathname } = useLocation()
  const [menuAbierto, setMenuAbierto] = useState(false)

  const cerrarMenu = () => setMenuAbierto(false)

  return (
    <header className="encabezado">