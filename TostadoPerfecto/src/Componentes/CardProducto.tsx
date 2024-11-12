import { Producto } from '../Servicios/interfaces';
import { Button, Card, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import '../styles/cardProducto.css';


interface ProductProps {
    producto: Producto;
}

function CardProducto({ producto }: ProductProps) {
    const navigate = useNavigate();
    const [cantidad, setCantidad] = useState(1); // Estado para la cantidad

    const handleNavigate = () => {
        navigate(`/producto/${producto.id}`);
    };

    const handleAddToCart = () => {

        const productoConCantidad = { ...producto, cantidad }; // Combina el producto con la cantidad

        // Obtener el carrito actual del sessionStorage
        const carrito = JSON.parse(sessionStorage.getItem('carrito') || '[]');

        // Añadir el nuevo producto al carrito
        carrito.push(productoConCantidad);

        // Guardar el carrito actualizado en el sessionStorage
        sessionStorage.setItem('carrito', JSON.stringify(carrito));

        // Alerta para confirmar la acción
        alert(`Añadido al carrito: ${producto.nombre} - Cantidad: ${cantidad}`);

    };

    return (
        <div>
            <Container>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={producto.imagen} alt={producto.nombre} />
                    <Card.Body>
                        <div>
                            <Card.Link onClick={handleNavigate}>{producto.nombre}</Card.Link>

                            <Card.Subtitle>{producto.precio}</Card.Subtitle>
                        </div>
                        <Card.Text>{producto.descripcion}</Card.Text>
                        <input
                            type="number"
                            value={cantidad}
                            min="1"
                            onChange={(e) => setCantidad(Number(e.target.value))} // Cambia la cantidad
                            style={{ width: '60px', marginRight: '10px', marginTop: '10px' }}
                        />
                        <br />
                        <Button variant="flat" onClick={handleAddToCart}>Añadir al carrito</Button>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
}

export default CardProducto;
