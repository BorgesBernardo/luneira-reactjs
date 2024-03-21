import React from 'react'
import CartWidget from './CartWidget'
import "./navbar.scss";

const NavBar = () => {
  return (
    <nav className='navbar-container'>

      <div className='logo-container'>
        <img src="img/logo-ln.png" alt="" />
      </div>

      <div className='menu-cart'>

        <div className='menu-container'>
          <li>Inicio</li>
          <li>Productos</li>
          <li>Servicios</li>
          <li>Nosotros</li>
          <li>Contacto</li>
        </div>

        <CartWidget />

      </div>

    </nav>
  )
}

export default NavBar
