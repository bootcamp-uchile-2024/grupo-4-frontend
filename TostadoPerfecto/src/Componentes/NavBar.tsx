
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/NavBar.css"
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { faMugSaucer } from "@fortawesome/free-solid-svg-icons";


export function Navbar() {
    return (
        <>
            <nav className="nav">
                <Link to="/" className="site-title">
                <FontAwesomeIcon icon={faMugSaucer} id="icono-nav-bar" />
                Tostado Perfecto</Link>
                <ul>
                    <CustomLink to="/login">Login</CustomLink>
                    <CustomLink to="/catalogo">Catálogo</CustomLink>
                    <CustomLink to="/carrito">Carrito</CustomLink>
                    <CustomLink to="/foro">Foro</CustomLink>
                    <CustomLink to="/about">About</CustomLink>
                </ul>
            </nav>
        </>
    )
}


function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to}{...props}>
                {children}
            </Link>
        </li>
    )

}