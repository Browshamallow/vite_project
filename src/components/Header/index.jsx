import { NavLink} from 'react-router'
import "./header.css"
import logo from "../../assets/images/logo.jpg"
function Header () {
    return (
        <header>
            <img src={logo} alt="logo" />
            <nav>
                <ul>
                    <li >
                    <NavLink
                            to="/"
                            className={({ isActive }) =>
                            isActive ? "active" : "inactive"
                            }
                        >
                            Accueil
                        </NavLink>

                    </li>
                    <li>
                    <NavLink
                            to="/a-propos"
                            className={({ isActive }) =>
                            isActive ? "active" : "inactive"
                            }
                        >
                            A propos
                        </NavLink>

                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;