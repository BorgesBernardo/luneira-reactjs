import React from 'react'
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { useContext } from "react"
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import "./cartwidget.scss"

const CartWidget = () => {

  const { totalQuantity } = useContext (CartContext)

  const quantity = totalQuantity()

  return (

      <Link to ="/cart" className='cartWidgetContainer'>

        <PiShoppingCartSimpleFill size={50}/>
        <p> { quantity > 0 && quantity } </p>
        
      </Link>
  )
}

export default CartWidget
