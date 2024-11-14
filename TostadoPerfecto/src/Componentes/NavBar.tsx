/* eslint-disable @typescript-eslint/no-explicit-any */


import { ReactNode } from "react";
import "../styles/NavBar.css"
import { Link, useMatch, useResolvedPath } from "react-router-dom";



export function Navbar() {
    return (
        <>           
            <nav className="nav">
                <Link to="/" className="site-title">Tostado Perfecto</Link>
                {/* <img 
                    src="src/imagenes/fondo tostado.jpeg"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"                    
                /> */}
                <ul>
                    <CustomLink to="/login">Login</CustomLink>
                    <CustomLink to="/catalogo">Catálogo</CustomLink>
                    <CustomLink to="/test">Test</CustomLink>
                    <CustomLink to="/testPaises">TestPaises</CustomLink>
                    <CustomLink to="/testFotos">TestFotos</CustomLink>
                    <CustomLink to="/carrito">Carrito</CustomLink>
                    <CustomLink to="/foro">Foro</CustomLink>
                    <CustomLink to="/about">About</CustomLink>
                </ul>
            </nav>


        </>
    )
}


function CustomLink({ to, children, ...props }: { to: string; children: ReactNode; [key: string]: any }) {
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