import { Link, NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import './NavBar.css';

const NavBar = () => {
    return (
        <header>
            <Link className="numerito" to="/">
                <h1>Nico Hardware</h1>
            </Link>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/categoria/2">Placas de video</NavLink>
                    </li>

                    <li>
                        <NavLink to="/categoria/3">Procesadores</NavLink>
                    </li>
                    <li>
                        <NavLink to="/categoria/4">Fuentes</NavLink>
                    </li>
                </ul>
            </nav>
            <CartWidget />
        </header>
    )
}

export default NavBar