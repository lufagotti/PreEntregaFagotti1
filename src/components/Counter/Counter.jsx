import React from 'react'
import { Button } from '@mui/material'
const Counter = ( {counter, sumar, restar, onAdd } ) => {
  return (
    <div style={{marginBottom:"20px", display:"flex", gap:"30px"}}>
      <Button style={{marginBottom:"20px", backgroundColor:"#9c93b5"}} variant="contained" onClick={restar}>-</Button>
      <h2 style={{marginTop:"0px"}}>{counter}</h2>
      <Button style={{marginBottom:"20px", backgroundColor:"#9c93b5"}} variant='contained' onClick={sumar}>+</Button>
      <Button variant='contained' onClick={()=>onAdd(counter)}  style={{backgroundColor:"#9c93b5"}}>agregar al carrito</Button>
    </div>
  )
}

export default Counter