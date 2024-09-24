import { faKey, faUser } from "@fortawesome/free-solid-svg-icons";
import "./Login.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from "react-bootstrap";
import React, { useState } from "react";
import {  useNavigate} from 'react-router-dom';



export function Login() {

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
        console.log("Datos del formulario en JSON:", JSON.stringify(formData, null, 2));
    }

    const navigate = useNavigate();
    const handleIngresar = () => {
        navigate("/admin");
    }

    return (
        <div className="contenedor-login">            
            <form onSubmit={handleSubmit} id="loginForm">
                <div className="mini-caja">
                    <FontAwesomeIcon icon={faUser} className="icono" />
                    <input
                        type="text"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        id="usuario"
                        placeholder="Nombre de usuario" />
                </div>
                <div className="mini-caja">
                    <FontAwesomeIcon icon={faKey} className="icono" />
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        id="password"
                        placeholder="Contraseña" />
                </div>
                <div className="mini-caja">
                    <Button variant="flat" type="submit" size="sm" onClick={handleIngresar}>Ingresar</Button>
                </div>
            </form>
        </div>
    )
}


