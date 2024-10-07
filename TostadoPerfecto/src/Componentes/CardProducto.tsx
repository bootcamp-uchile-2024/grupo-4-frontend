
import { Producto } from '../Servicios/interfaces'
import { Button, Card, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

interface ProductProps {
    producto: Producto;
}

function CardProducto({ producto }: ProductProps) {

    const navigate = useNavigate();

    const handleNavigate = () => {        
        navigate(`/producto/${producto.id}`);
    }

    return (
        <div>
            <style type="text/css">
                {`
                    .btn-flat {
                    background-color: #B23A48;
                    color: white;
                    margin-top: 10px;                    
                    }   

                    .btn-flat:hover {
                    background-color: #FCB9B2;                                      
                    }                   
                    `}
            </style>
            <Container>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={producto.imagen} alt={producto.nombre} />
                    <Card.Body>
                        <Card.Link onClick={handleNavigate}>{producto.nombre}</Card.Link>
                        <Card.Text>{producto.descripcion}</Card.Text>
                        <Card.Subtitle>{producto.precio}</Card.Subtitle>
                        <Button variant="flat">Añadir al carrito</Button>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    )
}

export default CardProducto;
