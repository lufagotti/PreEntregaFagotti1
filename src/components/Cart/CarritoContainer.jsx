import React, { useContext } from 'react'
import Carrito from './Carrito'
import { CartContext } from '../../context/CartContext'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'


const CarritoContainer = () => {
  const {cart, vaciarCarrito ,eliminarProductoById, getTotalPrice} = useContext(CartContext)
  let total = getTotalPrice()
  const navigate = useNavigate()
  const vaciarCarritoAlert = ()=>{
    Swal.fire({
    title: 'Queres vaciar el carrito?',
    showDenyButton: true,
    showCancelButton: false,
    confirmButtonText: 'Si, eliminar',
    denyButtonText: `No eliminar`,
  }).then((result) => {
  /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      vaciarCarrito()
      Swal.fire('Se vacio el carrito', '', 'success')
    } else if (result.isDenied) {
      Swal.fire('El carrito no se vacio', '', 'error')
    }
  })
  }
  return (
    <div>
        <Carrito 
        navigate={navigate}
        cart={cart} 
        vaciarCarritoAlert={vaciarCarritoAlert}
        eliminarProductoById={eliminarProductoById} 
        total={total}/>
    </div>
  )
}

export default CarritoContainer