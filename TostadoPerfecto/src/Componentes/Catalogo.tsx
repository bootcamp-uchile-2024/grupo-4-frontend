
import { Container, Row, Col } from 'react-bootstrap';
import CardProducto from './CardProducto';
import { useEffect, useState } from 'react';
import { Producto } from '../Servicios/interfaces';
import '../styles/Catalogo.css'

function Catalogo() {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);


    const [pagActual, setpagActual] = useState(1);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/photos');
               // const response = await fetch('http://44.201.117.138:3000/productos');
      
                if (!response.ok) {
                    throw new Error('Error en la petición');
                }
                const result = await response.json();
                setProductos(result);

            } catch (error) {
                setError(error instanceof Error ? error.message : 'Error desconocido');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <div>Cargando...</div>;
    if (error) return <div>Error: {error}</div>;
    console.log('lista', productos)


    //inicio paginador
    const ItemPorPag = 12;

    //calcular rango de elementos en la pag actual
    const indexUltimoItem = pagActual * ItemPorPag;
    const indexPrimerItem = indexUltimoItem - ItemPorPag;
    const itemsActuales = productos.slice(indexPrimerItem, indexUltimoItem);


    const handleCambioPag = (newPag: number) => {
        if (newPag >= 1 && newPag <= Math.ceil(productos.length / ItemPorPag)) {
            setpagActual(newPag);
        }
    }

    return (
        <div>
            <Container>
                <Row>
                    {/* {productos && productos.length > 0 && productos.map((producto: Producto) => (
                        <Col md={4} className="mb-4" key={producto.id}>
                            <CardProducto producto={producto} />
                        </Col>
                    ))} */}
                    {itemsActuales.map((producto: Producto) => (
                        <Col md={4} className="mb-4" key={producto.id}>
                            <CardProducto producto={producto} />
                        </Col>
                    ))}
                </Row>
                <section id='controles'>
                    <div>
                        <button id='anterior' className='button-control' onClick={() => handleCambioPag(pagActual - 1)}
                            disabled={pagActual === 1}>Anterior</button>
                        <button id='siguiente' className='button-control' onClick={() => handleCambioPag(pagActual + 1)}
                            disabled={pagActual === Math.ceil(productos.length / ItemPorPag)}>Siguiente</button>
                    </div>
                    <div>
                        <span id='paginador'>Página {pagActual} de {Math.ceil(productos.length / ItemPorPag)}</span>
                    </div>
                </section>
            </Container>
        </div>
    )
}

export default Catalogo;
