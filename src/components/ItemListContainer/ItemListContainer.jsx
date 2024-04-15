import React, { useState, useEffect } from 'react'
import getProducts from '../../Data/getProducts'
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import "./itemListContainer.scss"

const ItemListContainer = ( {saludo} ) => {

  const [products, setProducts] = useState([]);

  const {idCategory} = useParams();

useEffect(() => {
  
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
    .finally(()=> console.log("Finalizo la promesa"));

},[idCategory])
  
  return (
    <div>

      <div className='saludo'>

        <h1>{saludo}</h1>

      </div>

      <div className='container-list'>

        <ItemList products = {products} />
        
      </div>
    </div>


  );
};

export default ItemListContainer
