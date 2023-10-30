import {useState} from 'react'
import mzLogo from "../../assets/LogoMZHRTiny.png";

import './Navbar.css'

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className='navbar'>
      <div className='nav_logo'>
        <img className='mzLogo' src={mzLogo} alt="Logo MERAZAM" />
      </div>
      <div className={`nav_items ${isOpen && "open"}`}>
        <a href="#INICIO" onClick={() => setIsOpen(!isOpen)}>INICIO</a>
        <a href="#MISION" onClick={() => setIsOpen(!isOpen)}>VISION Y MISION</a>
        <a href="#TRAYECTORIA" onClick={() => setIsOpen(!isOpen)}>TRAYECTORIA</a>
        <a href="#DIRECCION" onClick={() => setIsOpen(!isOpen)}>DIRECCION</a>
      </div>
      <div className={`nav_toggle ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  )
}
