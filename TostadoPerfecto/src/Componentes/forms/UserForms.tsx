import { Button } from 'react-bootstrap';
import './forms.css';
import { useState } from 'react';

type Usuario = {
    nombre: string;
    apellido: string;
    direccion: string;
    comuna: string;
    ciudad: string;
    region: string;
    telefono: number;
    correo: string;
    contrasenna: string;
    rut: string;
};

export const UserForms = () => {
    const [user, setUser] = useState<Usuario>({
        nombre: "",
        apellido: "",
        direccion: "",
        comuna: "",
        ciudad: "",
        region: "",
        telefono: 0,
        correo: "",
        contrasenna: "",
        rut: ""
    });
    const [confirmarContrasenna, setConfirmarContrasenna] = useState<string>("");
    const [message, setMessage] = useState<string>("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({ ...prevUser, [name]: value }));
    };

    const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setConfirmarContrasenna(e.target.value);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (user.contrasenna !== confirmarContrasenna) {
            setMessage("Error: Las contraseñas no coinciden.");
            return;
        }

        try {
            const response = await fetch("http://44.201.117.138:3000/usuario", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    ...user,
                    telefono: Number(user.telefono),
                    pedidos: [],
                    carritoDeCompras: []
                }),
            });

            if (response.ok) {
                const data = await response.json();
                console.log("Usuario creado:", data);
                setMessage("Usuario creado exitosamente.");
                setUser({
                    nombre: "",
                    apellido: "",
                    direccion: "",
                    comuna: "",
                    ciudad: "",
                    region: "",
                    telefono: 0,
                    correo: "",
                    contrasenna: "",
                    rut: ""
                });
                setConfirmarContrasenna("");
            } else {
                const errorData = await response.json();
                setMessage(`Error: ${errorData.message}`);
            }
        } catch (error) {
            console.error("Error al conectar con el servidor:", error);
            setMessage("Error al conectar con el servidor.");
        }
    };

    return (
        <div className="form-container">
            <form className="form-content" onSubmit={handleSubmit}>
                <div className="mini-caja">
                    <label htmlFor="nombre" className="label-form">Nombre</label>
                    <input
                        type="text"
                        name="nombre"
                        value={user.nombre}
                        onChange={handleChange}
                        placeholder="Nombre"
                        required
                    />
                </div>
                <div className="mini-caja">
                    <label htmlFor="apellido" className="label-form">Apellido</label>
                    <input
                        type="text"
                        name="apellido"
                        value={user.apellido}
                        onChange={handleChange}
                        placeholder="Apellido"
                        required
                    />
                </div>
                <div className="mini-caja">
                    <label htmlFor="direccion" className="label-form">Dirección</label>
                    <input
                        type="text"
                        name="direccion"
                        value={user.direccion}
                        onChange={handleChange}
                        placeholder="Dirección"
                        required
                    />
                </div>
                <div className="mini-caja">
                    <label htmlFor="comuna" className="label-form">Comuna</label>
                    <input
                        type="text"
                        name="comuna"
                        value={user.comuna}
                        onChange={handleChange}
                        placeholder="Comuna"
                        required
                    />
                </div>
                <div className="mini-caja">
                    <label htmlFor="ciudad" className="label-form">Ciudad</label>
                    <input
                        type="text"
                        name="ciudad"
                        value={user.ciudad}
                        onChange={handleChange}
                        placeholder="Ciudad"
                        required
                    />
                </div>
                <div className="mini-caja">
                    <label htmlFor="region" className="label-form">Región</label>
                    <input
                        type="text"
                        name="region"
                        value={user.region}
                        onChange={handleChange}
                        placeholder="Región"
                        required
                    />
                </div>
                <div className="mini-caja">
                    <label htmlFor="telefono" className="label-form">Teléfono</label>
                    <input
                        type="number"
                        name="telefono"
                        value={user.telefono}
                        onChange={handleChange}
                        placeholder="Teléfono"
                        required
                    />
                </div>
                <div className="mini-caja">
                    <label htmlFor="correo" className="label-form">Correo Electrónico</label>
                    <input
                        type="email"
                        name="correo"
                        value={user.correo}
                        onChange={handleChange}
                        placeholder="Correo Electrónico"
                        required
                    />
                </div>
                <div className="mini-caja">
                    <label htmlFor="rut" className="label-form">RUT</label>
                    <input
                        type="text"
                        name="rut"
                        value={user.rut}
                        onChange={handleChange}
                        placeholder="RUT"
                        required
                    />
                </div>
                <div className="mini-caja">
                    <label htmlFor="contrasenna" className="label-form">Contraseña</label>
                    <input
                        type="password"
                        name="contrasenna"
                        value={user.contrasenna}
                        onChange={handleChange}
                        placeholder="Contraseña"
                        required
                    />
                </div>
                <div className="mini-caja">
                    <label htmlFor="confirmarContrasenna" className="label-form">Confirmar Contraseña</label>
                    <input
                        type="password"
                        value={confirmarContrasenna}
                        onChange={handleConfirmPasswordChange}
                        placeholder="Confirmar Contraseña"
                        required
                    />
                </div>

                <div className="d-flex justify-content-start">
                    <Button variant="flat" type="submit" size="sm">Crear Usuario</Button>
                    <p>{message}</p>
                </div>
            </form>
        </div>
    );
};
