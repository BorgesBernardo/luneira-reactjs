import React from 'react'
import { Link } from 'react-router-dom';
import "./item.scss"

const Item = ({product}) => {

  return (

    <div>
      <div key={product.id} className='cardProduct'>
        <img src={product.image} alt={product.name} className='image-item'/>
        <h2> {product.name} </h2>
        <p> {product.description} </p>
        <h3> $ {product.price} </h3>
        <Link to={`/detail/${product.id}`} className='detailButton'> Ver Info </Link>
      </div>
    </div>


  );
};

export default Item


