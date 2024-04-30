import { createContext,useState } from 'react'
import React from 'react'

const CartContext = createContext() // es el que nos va a permitir consumir nuestra app

const CartProvider = ({children}) => { // encargado de envolver toda mi aplicación

  const [cart, setCart] = useState([])
  
  // función para añadir los productos al carrito
  const addToCart = (newProduct) => {
    const condicion = isInCart(newProduct.id)
    if(condicion){
      // sumar la cantidad a ese producto en específico
      const productsMod = cart.map ((productCart) => {
        if (productCart.id === newProduct.id){
          return {...productCart, quantity: productCart.quantity + newProduct.quantity}
        } else{
          return productCart
        }
      })

      setCart (productsMod)

    } else{
      setCart([...cart,newProduct])
    }
    
  }

  // función para revisar si el producto se encuentra en el carrito o no

  const isInCart = (productId) => {
    const condicion = cart.some( (product) => product.id === productId )
    return condicion
  }


  // función para saber la cantidad total de productos en el carrito
  const totalQuantity = () => {

    // total = es el valor que recibo dentro del reduce
    // product = es el producto que recibo

    const quantity = cart.reduce( (total,product) => total + product.quantity, 0)
    return quantity
  }

  // función vaciar carrito
  const clearCart = () => {
    setCart ([]);
  }

  // eliminar un producto específico por el ID

  const deleteProductById = (productId) => {

    const productsFilter = cart.filter ( (productCart) => productCart.id !== productId)
    setCart (productsFilter)
  }


  // función para sumar el total de los precios de los productos
  const totalPrice = () =>{
    const price = cart.reduce((total, product) => total + (product.quantity * product.price), 0)
    return price
  }


  return (
    <CartContext.Provider value={ { cart, addToCart, totalQuantity, clearCart, deleteProductById,totalPrice } }> 

      {children}

    </CartContext.Provider>
  )
}

export {CartContext , CartProvider}
