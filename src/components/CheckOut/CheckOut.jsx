import React from 'react'
import { useState, useContext } from 'react'

import {toast} from "react-toastify"
import { Link } from 'react-router-dom'

import { CartContext } from '../../context/CartContext'
import { addDoc, collection } from "firebase/firestore"

import db from "../../db/db"
import FormCheckOut from './FormCheckOut'
import validateForm from '../../utils/validationYup.js'

import "./checkOut.scss"



const CheckOut = () => {

const [dataForm, setDataForm] = useState({
  name: "",
  phone: "",
  email:"",
  direccion:""
});

const [idOrder, setIdOrder] = useState (null)
const { cart, totalPrice, clearCart } = useContext(CartContext)

const handleChangeInput= (event) => {
  setDataForm({ ...dataForm, [event.target.name] : event.target.value })
}

const handleSubmit = async (event) => {
  // le damos formato a la orden
  event.preventDefault()
  const order = {
    user: {...dataForm},
    products: [...cart],
    total: totalPrice()
  }

  // validar los datos del formulario

  const response = await validateForm(dataForm)
  if (response.status === "success"){
    uploadOrder(order)
  } else{
    toast(response.error)
  }
};

const uploadOrder = async (order) =>{
  const ordersRef = collection(db, "ordes")
  const response = await addDoc (ordersRef, order)

  setIdOrder (response.id);
  clearCart()
}


  return (
    <div className='containerCheckOut'>
      { idOrder ? ( 

      <div className='checkOutOrder'> 
        <h2> Su pedido se realizo exitosamente </h2>
        <p> Guarde el id de su compra: <span>{idOrder}</span> </p> 
        <Link to="/" className='backToHome'> Volver al inicio </Link>

      </div>) : 
      (
        <FormCheckOut 
        handleSubmit={handleSubmit} 
        handleChangeInput={handleChangeInput} 
        dataForm={dataForm} />

      )}
    </div>
  )
}

export default CheckOut
