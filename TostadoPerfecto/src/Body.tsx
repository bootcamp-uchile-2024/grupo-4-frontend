import "./Body.css"
import { Navbar } from "./Componentes/NavBar";

import { About } from "./Paginas/About";
import { Catalogo } from "./Paginas/Catalogo";
import { Home } from "./Paginas/Home";
import { Route, Routes } from "react-router-dom";


function Body() {     
    return (
        <div className="body-container">
            <Navbar />
            <div className="container">
               <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/catalogo" element={<Catalogo/>}></Route>
                <Route path="/about" element={<About/>}></Route>
               </Routes>
            </div>
        </div>
    )
}

export default Body;