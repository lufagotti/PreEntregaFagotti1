// import "./Navbar.css"

import CartWidget from "../CartWidget/CartWidget";
import styles from "./Navbar.module.css"

import imgLogo from "../../assets/images/1.jpg"

export const Navbar = () => {
    return (
    <div className={styles.containerNavbar}>
        <img src={imgLogo} alt="logo empresa" />
        <ul className={styles.categorias}>
            <li>Accesorios</li>
            <li>Maquillaje</li>
            <li>Carteras</li>
        </ul>
        <CartWidget />
    </div>
    );
}