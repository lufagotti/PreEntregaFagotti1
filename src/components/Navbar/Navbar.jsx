// import "./Navbar.css"

import CartWidget from "../CartWidget/CartWidget";
import styles from "./Navbar.module.css"

import imgLogo from "../../assets/images/1.jpg"

export const Navbar = () => {
    return (
    <div className={styles.containerNavbar}>
        <img src={imgLogo} alt="logo empresa" />
        <ul className={styles.categorias}>
            <li>Inicio</li>
            <li>Acessorios</li>
            <li>Maquillaje</li>
        </ul>
        <CartWidget />
    </div>
    );
}