import "./Body.css"
import { Navbar } from "./Componentes/NavBar";

import { About } from "./Paginas/About";
import { Carrito } from "./Paginas/Carrito";
import Catalogo from "./Componentes/Catalogo";
import { Foro } from "./Paginas/Foro";
import { Home } from "./Paginas/Home";
import { Route, Routes } from "react-router-dom";
import { Products } from "./Paginas/Products";
import { Login } from "./Paginas/Login";
import { Admin } from "./Paginas/Admin";
import { UserForms } from './Componentes/forms/UserForms';


function Body() {     
    return (
        <div className="body-container">
            <Navbar />
            <div className="container">
               <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/catalogo" element={<Catalogo/>}></Route>
                <Route path="/carrito" element={<Carrito/>}></Route>
                <Route path="/foro" element={<Foro/>}></Route>
                <Route path="/about" element={<About/>}></Route>
                <Route path="/producto/:id" element={<Products/>}></Route>
                <Route path="/admin" element={<Admin/>}></Route>
                <Route path="/nuevoUsuario" element={<UserForms/>}></Route>
               </Routes>
            </div>
        </div>
    )
}

export default Body;