import React, { useContext } from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "./itemDetail.scss"
import CountController from '../Count-Controller/CountController';
import { CartContext } from '../../context/CartContext';
import {doc, getDoc} from "firebase/firestore";
import db from "../../db/db";

const ItemDetail = ({}) => {

  const [product, setProduct] = useState({})

  const { idProduct } = useParams()

  const getProducts = async() => {
    const docRef = doc(db, "products", idProduct);
    const dataDb = await getDoc (docRef)

    const data = {id: dataDb.id, ...dataDb.data()}

    setProduct(data)
  }

  const { cart, addToCart } = useContext(CartContext)


  const handleAddToCart = (contador) => {

    const productCart = {...product, quantity: contador} // este va a ser el producto que agregemos al carrito
    addToCart(productCart)
  }

  useEffect(() => {

    getProducts()

  },[idProduct])

  return (

    <div className='productCardContainer'>
      <div>
        <img src={product.image} alt={product.name} className='image-tem'/>
      </div>
      <div className='productItemDetail'>
        <h2> {product.name} </h2>
        <p> {product.description} </p>
        <h3> $ {product.price} </h3>
        <CountController handleAddToCart={handleAddToCart} stock={product.stock}/>
      </div>

    </div>
  )
}

export default ItemDetail
