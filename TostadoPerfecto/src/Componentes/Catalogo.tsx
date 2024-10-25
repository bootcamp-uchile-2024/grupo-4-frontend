
import { Container, Row, Col } from 'react-bootstrap';
import { productosData } from '../Data/dataProductos';
import CardProducto from './CardProducto';
import { useTostadoPerfectoContext } from '../context/tostadoPerfecto.context';
import { useEffect } from 'react';

function Catalogo() {

    const { contextProperties } = useTostadoPerfectoContext();
    const { products } = contextProperties;

    useEffect(() => {
        console.log('Productos:', products);
    }, [products]);

    return (
        <div>
            <Container>
                <Row>
                    {productosData.map(producto => (
                        <Col md={4} className="mb-4" key={producto.id}>
                            <CardProducto producto={producto} />
                        </Col>
                    ))}
                </Row>
            </Container>           
        </div>
    )
}

export default Catalogo;
