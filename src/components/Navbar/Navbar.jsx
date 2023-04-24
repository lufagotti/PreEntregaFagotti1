// import "./Navbar.css"

import CartWidget from "../CartWidget/CartWidget";
import styles from "./Navbar.module.css"
import imgLogo from "../../assets/images/1.jpg"
import {Outlet, Link} from "react-router-dom"

export const Navbar = () => {
    return (
    <div>
        <div className={styles.containerNavbar}>
            <Link to="/">
            <img className={styles.img} src={imgLogo} alt="logo empresa" />
            </Link>
            <ul className={styles.categorias}>
                <Link to="/">Inicio</Link>
                <Link to="/category/accesorios">Accesorios</Link>
                <Link to="/category/maquillaje">Maquillaje</Link>
            </ul>
            <CartWidget />
        </div>
        <Outlet />
    </div>
    );
}