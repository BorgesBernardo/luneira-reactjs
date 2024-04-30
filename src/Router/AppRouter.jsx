import React from 'react'
import{ BrowserRouter, Routes,Route } from "react-router-dom"
import NavBar from "../components/Navbar/NavBar"
import ItemListContainer from "../components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetail"
import { CartProvider } from "../context/CartContext"
import Cart from "../components/cart/Cart"


const AppRouter = () => {
  return (

  <>
      
    <BrowserRouter>

      <CartProvider>

        <NavBar />  

        <Routes>
      
          <Route path="/" element={ <ItemListContainer saludo = "Bienvenidos a Lu Neira" /> } />

          <Route path="/category/:idCategory" element={ <ItemListContainer /> } />

          <Route path="/detail/:idProduct" element={ <ItemDetailContainer /> } />

          <Route path ="/cart" element = {<Cart />} />
  
        </Routes>

      </CartProvider>
      
    </BrowserRouter>
      

  </>
  )
}

export default AppRouter
