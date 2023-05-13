import React from 'react'
import { Button } from '@mui/material'
const Counter = ( {counter, sumar, restar, onAdd } ) => {
  return (
    <div style={{marginBottom:"20px", display:"flex", gap:"30px"}}>
      <Button style={{marginBottom:"20px"}} variant="contained" onClick={restar}>-</Button>
      <h2 style={{marginTop:"0px"}}>{counter}</h2>
      <Button style={{marginBottom:"20px"}} variant='contained' onClick={sumar}>+</Button>
      <Button variant='contained' onClick={()=>onAdd(counter)}>agregar al carrito</Button>
    </div>
  )
}

export default Counter