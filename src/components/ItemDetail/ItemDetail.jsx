import React from 'react'
import styles from "./ItemDetail.module.css"
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import CounterContainer from '../Counter/CounterContainer'

export const ItemDetail = ({product, onAdd, cantidadTotal}) => {
  return (
    <div className={styles.detail}>
      <img className={styles.imagen} src={product.img} alt="" />
      <div className={styles.description}>
      <h1>{product.title}</h1>
      <h3>{product.description}</h3>
      <CounterContainer stock={product.stock} onAdd={onAdd} initial={cantidadTotal}/>
      <Link to="/">
      <Button variant="contained" size="small" style={{backgroundColor:"#9c93b5"}} >Ir al inicio</Button>
      </Link>
      </div>
    </div>
  )
}
