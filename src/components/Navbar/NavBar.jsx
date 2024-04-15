import React from 'react'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'
import "./navbar.scss";

const NavBar = () => {

  return (
    <nav className='navbar-container'>

      <div className='logo-container'>
        
        <Link to="/">
          <img src="img/logo-ln.png" alt="luneiranails" />
        </Link>
        

      </div>

      <div className='menu-cart'>

        <div className='menu-container'>
          <Link to="/category/mascaras" className='category'> Máscaras </Link>
          <Link to="/category/cremas" className='category'> Cremas </Link>
          <Link to="/category/lociones" className='category'> Lociones </Link>
          <Link to="/category/scrub" className='category'> Scrub </Link>
          <Link to="/category/serum" className='category'> Serum </Link>
        </div>

        <CartWidget />

      </div>

    </nav>
  )
}

export default NavBar
