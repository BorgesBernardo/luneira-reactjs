import React from 'react'
import "./formCheckOut.scss"

const FormCheckOut = ({dataForm, handleChangeInput, handleSubmit}) => {
  return (
    <div className='containerForm'>
      <form onSubmit={handleSubmit} className='form'>
        <div className='label'>
          <label htmlFor="name">Nombre </label>
          <input type="text" id="name" name="name" value={dataForm.name} onChange={handleChangeInput}/>
        </div>
        <div className='label'>
          <label htmlFor="phone"> Telefono </label>
          <input type="number" id="phone" name="phone" value={dataForm.phone} onChange={handleChangeInput}/>
        </div>
        <div className='label'>
          <label htmlFor="email"> Email </label>
          <input type="email" id="email" name="email" value={dataForm.email} onChange={handleChangeInput}/>
        </div>
        <div className='label'>
          <label htmlFor="direccion"> Dirección de envío </label>
          <input type="text" id="direccion" name="direccion" value={dataForm.direccion} onChange={handleChangeInput}/>
        </div>
        
        <button type="submit" className='sendButton'> Enviar Orden </button>
      </form>
    </div>
  )
}

export default FormCheckOut
