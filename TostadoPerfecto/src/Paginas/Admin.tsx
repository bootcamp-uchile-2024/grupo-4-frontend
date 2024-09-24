
import { Tabs, Tab, Button } from "react-bootstrap";
import "./Admin.css"

export function Admin() {


    return (
        <div className="container-admin">
            <h1>Admin</h1>
            <Tabs
                defaultActiveKey="newProduct"
                className="mb-3"
                justify
            >
                <Tab eventKey="newProduct" title="Nuevo Producto" className="first-tab">
                    <h2>Nuevo Producto</h2>
                    <form id="productoForm">
                        <div className="mini-caja">
                            <label htmlFor="" className="label-form">Nombre producto</label>
                            <input type="text"></input>
                        </div>
                        <div className="mini-caja">
                            <label htmlFor="" className="label-form">Descripcion</label>
                            <input type="text"></input>
                        </div>
                        <div className="mini-caja">
                            <label htmlFor="" className="label-form">Precio</label>
                            <input type="number"></input>
                        </div>

                        <div className="mini-caja">
                            <label htmlFor="" className="label-form">Stock</label>
                            <input type="number"></input>
                        </div>
                        <div className="mini-caja">
                            <label htmlFor="" className="label-form">Marca</label>
                            <input type="text"></input>
                        </div>
                        <div className="mini-caja">
                            <label htmlFor="" className="label-form">Origen</label>
                            <input type="text"></input>
                        </div>
                        <div className="mini-caja">
                            <label htmlFor="" className="label-form">Tipo</label>
                            <select name="" id="">
                                <option value="">--Seleccione un tipo--</option>
                                <option value="accesorios">Accesorios</option>
                                <option value="bebidas">Bebidas</option>
                                <option value="box">Box</option>
                            </select>
                        </div>
                        <div className="mini-caja">
                            <label htmlFor="" className="label-form">Formato</label>
                            <input type="text"></input>
                        </div>
                        <div className="mini-caja">
                            <label htmlFor="" className="label-form" id="fecha-cracion">Fecha de creación</label>
                            <input type="date"></input>
                        </div>
                        <div className="mini-caja">
                            <label htmlFor="" className="label-form" id="label-imagen">Imagen</label>
                            <input type="file"></input>
                        </div>
                        <div className="mini-caja">
                            <label htmlFor="" className="label-form">Destacado</label>
                            <input type="checkbox"></input>
                        </div>
                        <div className="mini-caja">
                            <Button variant="flat" type="submit" size="sm" >Crear Producto</Button>
                        </div>
                    </form>
                </Tab>
                <Tab eventKey="newUser" title="Nuevo Usuario">
                    <h2>Nuevo Usuario</h2>
                    <form id="userForm">
                        <div className="mini-caja">
                            <label htmlFor="" className="label-form">Nombre Usuario</label>
                            <input type="text"></input>
                        </div>
                        <div className="mini-caja">
                            <label htmlFor="" className="label-form">Contraseña</label>
                            <input type="text"></input>
                        </div>
                        <div className="mini-caja">
                            <label htmlFor="" className="label-form">Confirmar contraseña</label>
                            <input type="number"></input>
                        </div>
                        <div className="mini-caja">
                            <label htmlFor="" className="label-form">Tipo de usuario</label>
                            <select name="" id="">
                                <option value="">--Seleccione un tipo--</option>
                                <option value="admin">Administrador</option>
                                <option value="normal">Normal</option>
                            </select>
                        </div>
                        <div className="mini-caja">
                            <Button variant="flat" type="submit" size="sm" >Crear Usuario</Button>
                        </div>
                    </form>
                </Tab>

            </Tabs>
        </div>
    )
}