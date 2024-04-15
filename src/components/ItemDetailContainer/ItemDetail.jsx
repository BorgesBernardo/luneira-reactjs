import React from 'react'

const ItemDetail = ({product}) => {
  return (
    <div className='product-card'>
      <img src={product.image} alt={product.name} className='image-tem'/>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <h3>{product.price}</h3>
    </div>
  )
}

export default ItemDetail
