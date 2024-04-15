import React from 'react'
import { useState } from 'react';
import "./countController.scss";

const CountController = ({addToCart}) => {

  const [ contador, setContador ] = useState(1);

  const sumar = () =>{

  setContador(contador + 1);

  }

  const restar = () =>{
    
    if (contador > 1 ) {
      setContador(contador - 1)
    } else 
      alert("No se puede Restar Más");
  }

  return (
    <div className='container-controller'>
    <div className='container-contador'>
      <button onClick={restar} className='boton-operacion'> - </button>
      <p> Cantidad:{contador} </p>
      <button onClick={sumar} className='boton-operacion'> + </button>
    </div>
    <div>
      <button onClick={() => addToCart (contador)}> Agregar al Carrito</button>
    </div>

  </div>

  );
};

export default CountController
