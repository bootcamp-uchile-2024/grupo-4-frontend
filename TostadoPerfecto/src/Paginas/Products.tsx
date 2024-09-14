import { useParams } from 'react-router-dom';
import { Card, Button, Container, Row, Breadcrumb, Col } from 'react-bootstrap';

import { productosData } from '../Data/dataProductos';
import { useEffect, useState } from 'react';

export function Products() {

    const { id } = useParams(); // Extraer el ID desde la URL

    const [producto, setProducto] = useState<any>(null);

     // Efecto para buscar el producto por id
     useEffect(() => {
        const productoEncontrado = productosData.find(prod => prod.id === parseInt(id || '0', 10));
        setProducto(productoEncontrado);
    }, [id]);

    // Verificar si se encontró el producto
    if (!producto) {
        return <h2>Producto no encontrado</h2>;
    }

    console.log(producto);

    return (
        <>
            <Container>

                <Row className='p-2'>

                    <Breadcrumb>
                        <Breadcrumb.Item href="/catalogo">Catálogo</Breadcrumb.Item>
                        <Breadcrumb.Item active>{producto.nombre}</Breadcrumb.Item>
                    </Breadcrumb>

                </Row>

                <Row className='p-2'>

                    <Card style={{ width: '100%' }}>
                        <Card.Img variant="top" src={producto.imagen} />
                        <Card.Body>

                                <Card.Title className='text-start'>{producto.nombre}</Card.Title>
                                <hr />
                                <Card.Text className='text-start'>{producto.descripcion}</Card.Text>
                                <Card.Text className='text-start'>Marca: {producto.marca}</Card.Text>
                                <Card.Text className='text-start'>Precio: {producto.precio}</Card.Text>
                                <Card.Text className='text-start'>Origen: {producto.origen}</Card.Text>
                                <Card.Text className='text-start'>Stock: {producto.stock}</Card.Text>
                                <Card.Text className='text-start'>Destacado: {
                                    producto.destacado ? (
                                        <i className="text-success fas fa-check"></i>
                                    ) : (
                                        <i className="text-danger fas fa-times"></i>
                                    )
                                }</Card.Text>
                                

                        </Card.Body>
                        <Card.Footer>
                             <div className='d-flex justify-content-end'>
                                <Button variant="primary">Añadir al carrito</Button>
                            </div>
                        </Card.Footer>
                    </Card>
        
                </Row>

            </Container>
        </>
    )
}