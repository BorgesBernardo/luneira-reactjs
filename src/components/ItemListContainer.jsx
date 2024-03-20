import React from 'react'
import "./itemListContainer.scss"

const ItemListContainer = ( {saludo, mensaje} ) => {
  return (
    <div className='container'>
      <h1> {saludo} </h1>
      <h3> {mensaje} </h3>
    </div>
  )
}

export default ItemListContainer
