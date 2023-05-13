import React from 'react'
import { Button } from '@mui/material'

const Carrito = ({cart, vaciarCarrito, eliminarProductoById, total}) => {
  return (
    <div>
      <h1>Aca el carrito</h1>
        {
          cart.map((product) => {
            return (
            <div key={product.id} style={{border:"2px solid black"}}>
              <h3>{product.title}</h3>
              <h4>{product.price}</h4>
              <h4>{product.quantity}</h4>
              <Button variant='contained'onClick={()=>eliminarProductoById(product.id)}>Eliminar</Button>
            </div>
            );
          })
        }
        <Button onClick={vaciarCarrito} variant='contained'>Vaciar carrito</Button>
        <h1>El total de la compra es {total}</h1>
    </div>
  )
}

export default Carrito