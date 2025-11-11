import { NavLink } from "react-router";
import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";

function NavBar() {
    return (
        <nav className="navbar">
            <ul className="nav-links">
                <li><NavLink to="/">Inicio</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/services">Services</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
            <NavLink to="/cart-detail">
                <button className="nav-button" aria-label="Carrito">
                    <CartWidget />
                </button>
            </NavLink>
        </nav>
    );
}

export default NavBar;