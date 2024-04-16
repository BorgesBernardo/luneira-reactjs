import React from 'react'
import { useEffect, useState } from 'react'
import getProducts from '../../Data/getProducts'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import "./itemDetail.scss"

const ItemDetail = ({}) => {

  const [product, setProduct] = useState({})

  const { idProduct, idCategory } = useParams()

    useEffect(() => {

      getProducts
        .then((respuesta) => {
          const newProduct = respuesta.find((product)=> product.id === idProduct);
          setProduct(newProduct)
        
        })
        .catch((error) => console.log(error))
        .finally(()=> console.log("Finalizo la promesa"));
    },[idProduct])

  return (

    <div className='product-card-detail'>
      <img src={product.image} alt={product.name} className='image-tem'/>
        <h2> {product.name} </h2>
        <p> {product.description} </p>
        <h3> {product.price} </h3> 
    </div>
  )
}

export default ItemDetail
