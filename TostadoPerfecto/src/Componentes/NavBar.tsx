

import "../styles/NavBar.css"
import { Link, useMatch, useResolvedPath } from "react-router-dom";



export function Navbar() {
    return (
        <>
            <nav className="nav">
                <Link to="/" className="site-title">Tostado Perfecto</Link>
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