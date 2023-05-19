// import "./Navbar.css"

import CartWidget from "../CartWidget/CartWidget";
import styles from "./Navbar.module.css"
import imgLogo from "../../assets/images/2.png"
import {Outlet, Link} from "react-router-dom"
import { database } from "../../firebaseConfig";
import {getDocs, collection} from "firebase/firestore"
import { useEffect, useState } from "react";

export const Navbar = () => {
    const [categories, setCategories] = useState([])
    console.log(categories)
    useEffect(()=>{
        const categoriesCollection = collection(database, "categories")
        getDocs(categoriesCollection).then(res => {
            let categoriesResult = res.docs.map(category => {
                return {
                    ...category.data(),
                    id: category.id
                }
            })
            setCategories(categoriesResult)
        }).catch(err => console.log(err))
    },[])
    return (
    <div>
        <div className={styles.containerNavbar}>
            <Link to="/">
            <img className={styles.img} src={imgLogo} alt="logo empresa" />
            </Link>
            <ul className={styles.categorias}>
            {
                categories.map(category => {
                    return <Link key={category.id} to={category.path} className={styles.pag}>{category.title}</Link>
                })
            }
            </ul>
            <CartWidget />
        </div>
        <Outlet />
    </div>
    );
}