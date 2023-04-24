import React from 'react'
import styles from "./ItemDetail.module.css"

export const ItemDetail = ({product}) => {
  return (
    <div className={styles.detail}>
      <img className={styles.imagen} src={product.img} alt="" />
      <div className={styles.description}>
      <h1>{product.title}</h1>
      <h3>{product.description}</h3>
      </div>
    </div>
  )
}
