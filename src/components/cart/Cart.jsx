import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import "./cart.scss"
import { Link } from 'react-router-dom'

const Cart = () => {

  const { cart, clearCart, deleteProductById, totalPrice } = useContext(CartContext)


  // early return

  if(cart.length === 0){
    return <div className='emptyCart'> Carrito Vacio </div>
  }

  return (

  <div className='cartContainer'>
      <h2>Productos en el carrito</h2>
      <div className='itemCardContainer'>
        {cart.map ((product) => (
          <div key={product.id} className='itemCard'>
            <img src={product.image} alt={product.name} />
            <p> {product.name} </p>
            <p> Precio: <span>${product.price}</span> </p>
            <p> Cantidad: <span>{product.quantity}</span> </p>
            <p> Total: <span>${product.quantity * product.price}</span> </p>
            <button onClick={ () => deleteProductById(product.id) }> Eliminar producto </button>
          </div>
        )) }
      </div>
      
      <div className='totalContainer'>
        <h3> Precio Total: ${totalPrice()}</h3>
        <div className='containerButtonCart'>
        <Link to="/checkout" className='buy'> Continuar con la compra </Link>
        <button onClick={clearCart}> Vaciar carrito </button>
        </div>

      </div>

  </div>
  )
}

export default Cart
