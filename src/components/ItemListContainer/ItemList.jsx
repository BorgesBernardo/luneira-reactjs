import Item from './Item'
import React from 'react'
import "./itemList.scss"

const ItemList = ({ products, saludo }) => {

  return (

    <div className='itemListContainer'>

      <div className='saludo'>
        <h1>{saludo}</h1>
      </div>

      <div className='itemList'>
      {products.map((product) => {
          return <Item key={product.id} product={product}/>
        } 
        )
      }
      </div>

    </div>
  )
}

export default ItemList
