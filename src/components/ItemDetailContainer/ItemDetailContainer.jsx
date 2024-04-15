import { useEffect, useState } from 'react'
import getProducts from '../../Data/getProducts'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import React from 'react'

const ItemDetailContainer = () => {

  const [product, setProduct] = useState({})

  const { idProduct } = useParams()

  useEffect(() => {

    getProducts
      .then((respuesta)=>{

        const newProduct = respuesta.find((product)=> product.id === idProduct)
        setProduct(newProduct)

      })
      .catch((error) => console.log(error))

  },[])

  return (

  <div>
    <ItemDetail product = {product}/>
  </div>

  )
}

export default ItemDetailContainer
