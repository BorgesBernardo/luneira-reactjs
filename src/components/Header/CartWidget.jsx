import React from 'react'
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import "./cartwidget.scss"

const CartWidget = () => {
  return (
    <div>

      <div className='cart-container'>
      <PiShoppingCartSimpleFill size={50}/>
      <p>2</p>
      
      </div>
    </div>
  )
}

export default CartWidget
