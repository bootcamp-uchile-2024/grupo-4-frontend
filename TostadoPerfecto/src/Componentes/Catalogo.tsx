import { Container, Row, Col } from 'react-bootstrap';
import CardProducto from './CardProducto';
import { useEffect, useState } from 'react';
import { Producto } from '../Servicios/interfaces';

function Catalogo() {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [pagActual, setPagActual] = useState(1);
    const [totalPages, setTotalPages] = useState<number>(1);
    const PAGE_SIZE: number = 5;

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const productsResponse = await fetch(`http://44.201.117.138:3000/productos?page=${pagActual}&pageSize=${PAGE_SIZE}`);
                
                if(productsResponse.status === 200) {

                    const result = await productsResponse.json();
                    setProductos(result.data);
                    setTotalPages(result.totalPages);

                } else {
                    setError('Error al obtener productos');
                }


            } catch (error) {
                setError(error instanceof Error ? error.message : 'Error desconocido');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [pagActual]);

    if (loading) return <div>Cargando...</div>;
    if (error) return <div>Error: {error}</div>;

    const handleCambioPag = (newPag: number) => {
        if (newPag >= 1 && newPag <= totalPages) {
            setPagActual(newPag);
        }
    }

    return (
        <div>
            <Container>
                <Row>
                    {productos.map((producto: Producto) => (
                        <Col md={4} className="mb-4" key={producto.id}>
                            <CardProducto producto={producto} />
                        </Col>
                    ))}
                </Row>
                <section id='controles'>
                    <div>
                        <button
                            id='anterior'
                            className='button-control'
                            onClick={() => handleCambioPag(pagActual - 1)}
                            disabled={pagActual === 1}
                        >
                            Anterior
                        </button>
                        <button
                            id='siguiente'
                            className='button-control'
                            onClick={() => handleCambioPag(pagActual + 1)}
                            disabled={pagActual === totalPages}
                        >
                            Siguiente
                        </button>
                    </div>
                    <div>
                        <span id='paginador'>Página {pagActual} de {totalPages}</span>
                    </div>
                </section>
            </Container>
        </div>
    )
}

export default Catalogo;
