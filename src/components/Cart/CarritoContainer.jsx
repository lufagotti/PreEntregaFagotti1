import React, { useContext } from 'react'
import Carrito from './Carrito'
import { CartContext } from '../../context/CartContext'

const CarritoContainer = () => {
  const {cart, vaciarCarrito, eliminarProductoById, getTotalPrice} = useContext(CartContext)
  let total = getTotalPrice()
  return (
    <div>
        <Carrito 
        cart={cart} 
        vaciarCarrito={vaciarCarrito} 
        eliminarProductoById={eliminarProductoById} 
        total={total}/>
    </div>
  )
}

export default CarritoContainer