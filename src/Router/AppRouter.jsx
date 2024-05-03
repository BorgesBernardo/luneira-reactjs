import React from 'react'
import{ BrowserRouter, Routes,Route } from "react-router-dom"
import { ToastContainer } from 'react-toastify'

import NavBar from "../components/Navbar/NavBar"
import ItemListContainer from "../components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetail"
import { CartProvider } from "../context/CartContext"
import Cart from "../components/cart/Cart"
import CheckOut from '../components/CheckOut/CheckOut'

import 'react-toastify/dist/ReactToastify.css';



const AppRouter = () => {
  return (

  <>
    <BrowserRouter>

      <CartProvider>

        <NavBar />  
        <ToastContainer theme='dark'/>

        <Routes>
      
          <Route path="/" element={ <ItemListContainer saludo = "Bienvenidos a Lu Neira" /> } />

          <Route path="/category/:idCategory" element={ <ItemListContainer /> } />

          <Route path="/detail/:idProduct" element={ <ItemDetailContainer /> } />

          <Route path ="/cart" element = {<Cart />} />

          <Route path ="/checkout" element = {< CheckOut />} />
  
        </Routes>

      </CartProvider>
      
    </BrowserRouter>
  </>
  )
}

export default AppRouter
