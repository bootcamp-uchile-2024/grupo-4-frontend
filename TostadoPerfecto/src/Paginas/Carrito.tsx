import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Carrito.css';
import { Button, Card, Table } from 'react-bootstrap';

export function Carrito() {

    const navigate = useNavigate(); // Hook para navegación

    const [carrito, setCarrito] = useState<any[]>([]);

    // Cargar los productos del carrito desde sessionStorage
    useEffect(() => {
        const carritoLocal = JSON.parse(sessionStorage.getItem('carrito') || '[]');
        setCarrito(carritoLocal);
    }, []);

    // Calcular el total del carro 
    const calcularTotal = () => {
        return carrito.reduce((total, producto) => total + (producto.precio * producto.cantidad), 0).toFixed(2);
    };

    // Función para eliminar un producto del carrito
    const eliminarProducto = (id: number) => {
        const nuevoCarrito = carrito.filter(producto => producto.id !== id);
        setCarrito(nuevoCarrito);
        sessionStorage.setItem('carrito', JSON.stringify(nuevoCarrito));
    };

    // Función modular para navegar a diferentes rutas
    const handleNavigate = (path: string) => {
        navigate(path);
    };

    return (
        <div className="container px-3 my-5 clearfix">
        <Card>
            <Card.Header>
                <h2>Carrito de Compra</h2>
            </Card.Header>
            <Card.Body>
                <div className="table-responsive">
                    <Table bordered className="m-0">
                        <thead>
                            <tr>
                                <th className="text-start py-3 px-4" style={{ minWidth: "400px" }}>Producto</th>
                                <th className="text-right py-3 px-4" style={{ width: "100px" }}>Precio</th>
                                <th className="text-center py-3 px-4" style={{ width: "120px" }}>Cantidad</th>
                                <th className="text-right py-3 px-4" style={{ width: "100px" }}>Total</th>
                                <th className="text-center align-middle py-3 px-0" style={{ width: "40px" }}>
                                    <a href="#" className="shop-tooltip float-none text-light" title="Clear cart">
                                        <i className="ino ion-md-trash"></i>
                                    </a>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {carrito.length === 0 ? (
                                <tr>
                                    <td colSpan={5} className="text-center">No hay productos en el carrito</td>
                                </tr>
                            ) : (
                                carrito.map(producto => (
                                    <tr key={producto.id}>
                                        <td className="p-4">
                                            <div className="text-start">
                                                <a href="#" className="d-block text-dark">{producto.nombre}</a>
                                            </div>
                                        </td>
                                        <td className="text-right font-weight-semibold align-middle p-4">${producto.precio}</td>
                                        <td className="align-middle p-4">{producto.cantidad}</td>
                                        <td className="text-right font-weight-semibold align-middle p-4">${(producto.precio * producto.cantidad).toFixed(2)}</td>
                                        <td className="text-center align-middle px-0">
                                            <a href="#" className="shop-tooltip close float-none text-danger" title="Remove" onClick={() => eliminarProducto(producto.id)}>×</a>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </Table>
                </div>
                <div className="d-flex flex-wrap justify-content-end pb-4">
                    <div className="p-4">
                        <label className="text-muted font-weight-normal m-0">Total</label>
                        <div className="text-large"><strong>${calcularTotal()}</strong></div>
                    </div>
                </div>
                <div className="d-flex justify-content-end">
                    <Button variant="secondary" className="btn-lg mt-2 mr-10px" onClick={() => handleNavigate('/catalogo')}>Volver al catálogo</Button>
                    <Button variant="flat" className="btn-lg mt-2" disabled={carrito.length === 0} onClick={() => handleNavigate('/checkout')}>Continuar</Button>
                </div>
            </Card.Body>
        </Card>
    </div>
    );
}
