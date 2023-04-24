import React, { useEffect, useState } from 'react'
import { ItemDetail } from './ItemDetail'
import { products } from '../../ProductsMock'
import {useParams} from "react-router-dom"


export const IteamDetailContainer = () => {

  const [product, setProduct] = useState({});

  const {id} = useParams()

  useEffect(() =>{
    let encontrado = products.find(prod => prod.id === Number(id))
    setProduct(encontrado)
  }, [id])


  return (
    <div>
      <ItemDetail product={product} />
    </div>
  )
}
