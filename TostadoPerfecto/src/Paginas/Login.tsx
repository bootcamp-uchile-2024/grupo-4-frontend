
import "../styles/Login.css"
import { Button } from "react-bootstrap";
import React, { useState } from "react";
import {  useNavigate} from 'react-router-dom';



export function Login() {
    
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        nombre: "",
        password: ""
    });

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    }

    function handleSubmit(event: React.FormEvent) {
        event.preventDefault();
        console.log("Datos del formulario en JSON:", JSON.stringify(formData));
        navigate("/admin");
    }

    function onClickNuevoUsuario(event: React.FormEvent) {
        event.preventDefault();        
        navigate("/nuevoUsuario");
    }


    return (
        <div className="contenedor-login">            
            <form onSubmit={handleSubmit} id="loginForm">
                <div className="mini-caja-login">    
                    <span>Correo</span>                
                    <input
                        type="text"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        id="usuario"
                        placeholder="Escribe tu correo aquí" />
                </div>
                <div className="mini-caja-login"> 
                    <span>Contraseña</span>                  
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        id="password"
                        placeholder="Escribe tu contraseña aquí" />
                </div>
                <div className="mini-caja-button">
                    <Button className="button" variant="flat" type="submit" >Ingresar</Button>
                    <Button className="button" variant="flat" type="submit" id="boton-nuevo-usuario" onClick={onClickNuevoUsuario} >Nuevo Usuario</Button>
                </div>
            </form>
        </div>
    )
}


