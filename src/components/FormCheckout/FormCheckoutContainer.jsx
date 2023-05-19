import React, { useContext, useState } from 'react'
import FormCheckout from './FormCheckout'
import {useFormik} from "formik"
import * as Yup from "yup"
import { CartContext } from '../../context/CartContext'
import { database } from '../../firebaseConfig'
import {addDoc, collection, serverTimestamp} from "firebase/firestore"

const FormCheckoutContainer = () => {

    const {cart, getTotalPrice} = useContext(CartContext)

    const [orderId, setOrderId] = useState(null)

    const checkoutFn = (data) => {
        let total = getTotalPrice()
        let dataOrder = {
            buyer: data,
            items: cart,
            total: total,
            date: serverTimestamp()
        }
        const ordersCollection = collection (database, "orders")
        addDoc(ordersCollection, dataOrder).then(res => setOrderId(res.id));
    };
    console.log(orderId)

    const {handleSubmit, handleChange, errors} = useFormik({
        initialValues:{
            nombre:"",
            telefono:"",
            email:""
        },
        onSubmit: checkoutFn,
        validationSchema: Yup.object().shape({
            nombre: Yup.string()
            .required("ingrese su nombre")
            .min( 3 , "el nombre debe tener al menos 3 caracteres")
            .max(10, "el nombre no debe superar los 10 caracteres"),
            email: Yup.string().email("debe ingresar un email").required("ingrese su email"),
            telefono: Yup.number().required("ingrese su telefono")
        }),
        validateOnChange: false
    });

  return (
    <div>
        {
            orderId ? (<h1>Compra realizada! tu numero de orden es: {orderId}</h1>) :(<FormCheckout errors={errors} handleSubmit={handleSubmit} handleChange={handleChange}/>)
        }
    </div>
  )
}

export default FormCheckoutContainer