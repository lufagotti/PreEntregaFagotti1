import React from 'react'
import { Button } from '@mui/material'
import "./Carrito.css"

const Carrito = ({cart, vaciarCarritoAlert, eliminarProductoById, total, navigate}) => {
  return (
    <div>
      <h1>Tu carrito:</h1>
        {
          cart.map((product) => {
            return (
            <div key={product.id} className='cart-item'>
              <img src={product.img} alt="" />
              <div className='cart-item-info'>
              <h3>{product.title}</h3>
              <h4>${product.price}</h4>
              <h4>{product.quantity}</h4>
              </div>
              <Button variant='contained'onClick={()=>eliminarProductoById(product.id)} style={{backgroundColor:"#9c93b5"}}>Eliminar</Button>
            </div>
            );
          })
        }
        {
          cart.length > 0 && <div>
          <Button onClick={vaciarCarritoAlert} variant='contained' style={{backgroundColor:"#9c93b5", marginRight:"32px", marginLeft:"400px"}}>Vaciar carrito</Button>
          <Button onClick={()=>navigate("/checkout")} variant='contained' style={{backgroundColor:"#9c93b5", marginLeft:"200px"}}>Terminar la compra</Button>
          <h1>El total de la compra es ${total}</h1>
          </div>
        }
        
    </div>
  )
}

export default Carrito