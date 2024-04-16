import { useState, useEffect } from 'react'
import getProducts from '../../Data/getProducts'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import "./itemListContainer.scss"
import {PropagateLoader} from "react-spinners"
import React from 'react'

const ItemListContainer = ( {saludo} ) => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const { idCategory } = useParams();

useEffect(() => {
  
  // muestra la pantalla de cargando
  setLoading(true)

  getProducts
    .then((respuesta)=>{
      
      if (idCategory){
        // filtra los productos
        const newProducts = respuesta.filter( (product)=> product.category === idCategory );
        setProducts(newProducts);
        
      }else{
        // devolver todos los productos
        setProducts(respuesta)
      }
    })
    .catch((error)=>console.log(error))
    .finally(()=> setLoading(false));

},[idCategory])
  
  return (
    <div>

      <div className='saludo'>
        <h1>{saludo}</h1>
      </div>

      <div className='container-list'>
        {
          loading ? <div className='spinner'> <PropagateLoader color="#baaaa2" /> </div> : <ItemList products = {products} /> 
        }
        </div>
    </div>


  );
};

export default ItemListContainer
