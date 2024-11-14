import { useParams } from 'react-router-dom';
import { Card, Button, Container, Row, Breadcrumb, FormControl } from 'react-bootstrap';
import { productosData } from '../Data/dataProductos';
import { useEffect, useState } from 'react';
import { Producto, Tipo } from '../Servicios/interfaces';

export function Products() {
  const { id } = useParams(); // Extraer el ID desde la URL
  const [producto, setProducto] = useState<Producto | undefined>({
    id: 0,
    nombre: '',
    descripcion: '',
    precio: 0,
    imagen: 'string',
    stock: 0,
    marca: '',
    origen: '',
    tipo: Tipo.vacio,
    formato: '',
    fecha: new Date(),
    categorias: {
      id: 0,
      nombre: '',
    },
    destacado: false,
  });

  const [cantidad, setCantidad] = useState(1); // Nuevo estado para la cantidad

  // Efecto para buscar el producto por id
  useEffect(() => {
    const productoEncontrado = productosData.find(prod => prod.id === parseInt(id || '0', 10));
    setProducto(productoEncontrado);
  }, [id]);

  // Manejar cambio de cantidad
  const handleCantidadChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCantidad(parseInt(e.target.value, 10)); // Actualizar la cantidad con el valor del input
  };

  // Función para añadir el producto al carrito
  const handleAddToCart = () => {
    console.log('Añadir al carrito', producto, cantidad);

    if (!producto) return;

    const carrito = JSON.parse(sessionStorage.getItem('carrito') || '[]');

    // Verificar si el producto ya está en el carrito
    const productoExistente = carrito.find((item: { id: number; }) => item.id === producto.id);

    if (productoExistente) {
      productoExistente.cantidad += cantidad; // Aumentar la cantidad si el producto ya está en el carrito
    } else {
      carrito.push({ ...producto, cantidad }); // Agregar el nuevo producto con la cantidad seleccionada
    }

    sessionStorage.setItem('carrito', JSON.stringify(carrito));

    alert(`Añadido al carrito: ${producto.nombre} - Cantidad: ${cantidad}`);



  };


  // Verificar si se encontró el producto
  if (!producto) {
    return <h2>Producto no encontrado</h2>;
  }

  return (
    <>
      <Container>
        <Row className="p-2">
          <Breadcrumb>
            <Breadcrumb.Item href="/catalogo">Catálogo</Breadcrumb.Item>
            <Breadcrumb.Item active>{producto.nombre}</Breadcrumb.Item>
          </Breadcrumb>
        </Row>
        <Row className="p-2">
          <Card style={{ width: '100%' }}>
            <Card.Img variant="top" src={producto.imagen} />
            <Card.Body>
              <Card.Title className="text-start">{producto.nombre}</Card.Title>
              <hr />
              <Card.Text className="text-start">{producto.descripcion}</Card.Text>
              <Card.Text className="text-start">Marca: {producto.marca}</Card.Text>
              <Card.Text className="text-start">Precio: {producto.precio}</Card.Text>
              <Card.Text className="text-start">Origen: {producto.origen}</Card.Text>
              <Card.Text className="text-start">Stock: {producto.stock}</Card.Text>
              <Card.Text className="text-start">
                Destacado: {producto.destacado ? (
                  <i className="text-success fas fa-check"></i>
                ) : (
                  <i className="text-danger fas fa-times"></i>
                )}
              </Card.Text>
              {/* Añadir campo de cantidad */}
              <div className="d-flex align-items-center">
                <FormControl
                  type="number"
                  min="1"
                  max={producto.stock}
                  value={cantidad}
                  onChange={handleCantidadChange}
                  className="mr-2"
                  style={{ width: '100px' }}
                />
                <Button variant="primary" onClick={handleAddToCart}>Añadir al carrito</Button>
              </div>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </>
  );
}
