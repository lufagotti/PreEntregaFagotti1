import React, { useState } from 'react'
import Counter from './Counter'

const CounterContainer = ({stock, onAdd}) => {
  
  const[counter, setCounter]= useState(0)

  const sumar = () =>{
    if(counter < stock){
      setCounter(counter + 1)
    }else{
      alert("stock maximo")
    }
  }

  const restar = () =>{
    setCounter(counter - 1)
  }

  return (
    <div><Counter counter={counter} sumar={sumar} restar={restar} onAdd={onAdd}/></div>
  )
}

export default CounterContainer