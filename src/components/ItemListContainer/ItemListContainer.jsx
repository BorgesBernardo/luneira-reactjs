import { useState, useEffect } from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import "./itemListContainer.scss"
import {PropagateLoader} from "react-spinners"
import { collection, getDocs, query, where } from "firebase/firestore";
import db from "../../db/db"
import React from 'react'

const ItemListContainer = ( {saludo} ) => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const { idCategory } = useParams();

  const getProducts = async () =>{

    const dataDb = await getDocs(collection(db, "products"));
    
    const data = dataDb.docs.map( (productDb) => {
      return {id: productDb.id, ...productDb.data()}
    })

    setProducts(data)
  }

  const getProducstByCategory = async () =>{
    const q = query(collection(db, "products"), where("category", "==", idCategory));
    
    const dataDb = await getDocs(q);
    
    const data = dataDb.docs.map( (productDb) => {
      return {id: productDb.id, ...productDb.data()}
    })

    setProducts(data)
  }

useEffect(() => {
  
  if(idCategory){
    getProducstByCategory()
  }else {
    getProducts()
  }

},[idCategory])
  
  return (
    <div>

      <div className='container-list'>
        {
          loading ? <div className='spinner'> <PropagateLoader color="#baaaa2" /> </div> : <ItemList products = {products} saludo = {saludo}/> 
        }
        </div>
    </div>


  );
};


export default ItemListContainer
