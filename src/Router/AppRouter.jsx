import{ BrowserRouter, Routes,Route } from "react-router-dom"
import NavBar from "../components/Navbar/NavBar"
import ItemListContainer from "../components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetail"
import React from 'react'


const AppRouter = () => {
  return (

  <>
      
    <BrowserRouter>

      <NavBar />  
      
      <Routes>
      
      {/* Routes va a envolver los componentes que tenga una ruta específica */}
        <Route path="/" element={ <ItemListContainer saludo = "Bienvenidos a Lu Neira" /> } />
        <Route path="/category/:idCategory" element={ <ItemListContainer />} />
        <Route path="/detail/:idProduct" element={ <ItemDetailContainer />} />
    
      </Routes>
      
    </BrowserRouter>
      



  </>
  )
}

export default AppRouter
