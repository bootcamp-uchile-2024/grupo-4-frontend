
import { Producto } from '../Servicios/interfaces'
import { Button, Card } from 'react-bootstrap';


interface ProductProps {
    producto: Producto;
}

function CardProducto({ producto }: ProductProps) {
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
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={producto.imagen} alt={producto.nombre} />
                <Card.Body>
                    <Card.Title>{producto.nombre}</Card.Title>
                    <Card.Text>{producto.descripcion}</Card.Text>
                    <Card.Subtitle>{producto.precio}</Card.Subtitle>
                    <Button variant="flat">Añadir al carito</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default CardProducto;
