
import { Tabs, Tab } from "react-bootstrap";
import "../styles/Admin.css"
import { ProductForms } from "../Componentes/forms/ProductForms";


export function Admin() {


    return (
        <div className="container-admin">
            <h1>Admin</h1>
            <Tabs
                defaultActiveKey="newProduct"
                className="mb-3 nav-tabs"
                justify
            >
                <Tab eventKey="newProduct" title="Nuevo Producto" className="first-tab">
                    <div className="d-flex flex-column align-items-center justify-content-center">
                        <h2>Nuevo Producto</h2>
                        <ProductForms />
                    </div>
                </Tab>               
            </Tabs>
        </div>
    )
}