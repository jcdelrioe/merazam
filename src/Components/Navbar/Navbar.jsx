import {useState} from 'react'
import mzLogo from "../../assets/Logo MZUp-DwTiny.png";

import './Navbar.css'

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className='navbar'>
      <div className='nav_logo'>
        <img className='mzLogo' src={mzLogo} alt="Logo MERAZAM" />
      </div>
      <div className={`nav_items ${isOpen && "open"}`}>
        <a href="#">INICIO</a>
        <a href="#">MISION</a>
        <a href="#">VISION</a>
        <a href="#">TRAYECTORIA</a>
      </div>
      <div className={`nav_toggle ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  )
}
