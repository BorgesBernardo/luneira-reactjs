import React from 'react'
import { useState } from 'react';
import "./countController.scss";

const CountController = ({handleAddToCart, stock}) => {

  const [ contador, setContador ] = useState(1);

  const handleAdd = () =>{
    if(contador < stock){
      setContador(contador + 1);
    }
  }

  const handleSubtract = () =>{
    
    if (contador > 1 ) {
      setContador(contador - 1)
    } else 
      alert("La cantidad no puede ser menor a 1");
  }

  return (
    <div className='controlerContainer'>
      <div className='countContainer'>
        <button onClick={handleSubtract} className='operationButton'> - </button>
        <p> Cantidad:{contador} </p>
        <button onClick={handleAdd} className='operationButton'> + </button>
      </div>
      <div>
        <button onClick={() => handleAddToCart (contador)} className='cartButton'> Agregar al Carrito</button>
      </div>
    </div>
  );
};

export default CountController
