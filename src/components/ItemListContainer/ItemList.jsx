import Item from './Item'
import React from 'react'
import "./itemList.scss"

const ItemList = ({ products }) => {

  return (

    <div className='container'>
      {
        products.map((product) => {

          return <Item key={product.id} product={product} />

        } 
        )
      }
    </div>
  )
}

export default ItemList
