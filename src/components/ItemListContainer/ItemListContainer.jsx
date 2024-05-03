import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {PropagateLoader} from "react-spinners"
import { collection, getDocs, query, where } from "firebase/firestore";
import Swal from 'sweetalert2';
import db from "../../db/db"
import ItemList from './ItemList'
import "./itemListContainer.scss"





const ItemListContainer = ( {saludo} ) => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const { idCategory } = useParams();

  const getProducts = async () =>{
    try{
      const dataDb = await getDocs(collection(db, "products"));
    
      const data = dataDb.docs.map( (productDb) => {
        return {id: productDb.id, ...productDb.data()}
      })
  
      setProducts(data);
      setLoading(false);
    }catch (error){
      sweetalert2();
    }
  }

  const getProducstByCategory = async () =>{
    try{
      const q = query(collection(db, "products"), where("category", "==", idCategory));
      const dataDb = await getDocs(q);
      const data = dataDb.docs.map( (productDb) => {
        return {id: productDb.id, ...productDb.data()}
      })
  
      setProducts(data)
    }catch (error){
      sweetalert2();
    }
  }


useEffect(() => {
  if(idCategory){
    getProducstByCategory()
  }else {
    getProducts()
  }

},[idCategory])



const sweetalert2 = ()=>{
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: " Algo salió mal",
  });
}


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
