
import {BsBagPlus} from "react-icons/bs"
import styles from "../Navbar/Navbar.module.css"
import style from "../CartWidget/CartWidget.module.css"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"


const CartWidget = () => {

    const { getTotalQuantity } = useContext(CartContext)
    
    let total = getTotalQuantity()

    return (
        <Link to="/cart">
        <div className={styles.color}>
        <BsBagPlus size={40} />
        <div className={style.counter}>
            <span>{total}</span>
        </div>
        </div>
        </Link>
    )
}

export default CartWidget