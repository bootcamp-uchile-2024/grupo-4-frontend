import { useState, useEffect } from 'react';
import { Card, Button, Form, Col, Row } from 'react-bootstrap';

export const Checkout = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        address: '',
        address2: '',
        country: '',
        state: '',
        zip: '',
        paymentMethod: 'credit',
        ccName: '',
        ccNumber: '',
        ccExpiration: '',
        ccCVV: '',
        saveInfo: false,
    });

    const [carrito, setCarrito] = useState<any[]>([]);

    // Cargar los productos del carrito desde sessionStorage
    useEffect(() => {
        const carritoLocal = JSON.parse(sessionStorage.getItem('carrito') || '[]');
        setCarrito(carritoLocal);
    }, []);

    const handleChange = (e: any) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        // Validar aquí después de hacer submit
        const formValid = e.target.checkValidity();
        if (!formValid) {
            e.stopPropagation();
        } else {
            // Aquí puedes agregar la lógica para manejar el envío del formulario.
            console.log(formData);
        }
        e.target.classList.add('was-validated');
    };

    return (
        <Card className="container">
            <Card.Header>
                <h2>Checkout</h2>
            </Card.Header>
            <Card.Body>
                <Row>
                    <Col md={4} className="order-md-2 mb-4">
                        <h4 className="d-flex justify-content-between align-items-center mb-3">
                            <span className="text-muted">Tu carrito</span>
                            <span className="badge badge-secondary badge-pill">{carrito.length}</span>
                        </h4>
                        <ul className="list-group mb-3">
                            {carrito.map((item, index) => (
                                <li key={index} className="list-group-item d-flex justify-content-between lh-condensed">
                                    <div>
                                        <h6 className="my-0">{item.nombre}</h6>
                                        <small className="text-muted">{item.descripcion}</small>
                                    </div>
                                    <span className="text-muted">${item.precio}</span>
                                </li>
                            ))}
                            <li className="list-group-item d-flex justify-content-between">
                                <span>Total</span>
                                <strong>${carrito.reduce((total, item) => total + item.precio, 0)}</strong>
                            </li>
                        </ul>
                        <Form className="card p-2">
                            <Form.Group className="input-group">
                                <Form.Control type="text" placeholder="Código promocional" />
                                <Button type="submit" variant="secondary">Canjear</Button>
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col md={8} className="order-md-1">
                        <h4 className="mb-3">Dirección de facturación</h4>
                        <Form className="needs-validation" onSubmit={handleSubmit} noValidate>
                            <Row>
                                <Col md={6} className="mb-3">
                                    <Form.Label htmlFor="firstName">Nombre</Form.Label>
                                    <Form.Control
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        required
                                    />
                                    <Form.Control.Feedback type="invalid">Se requiere un nombre válido.</Form.Control.Feedback>
                                </Col>
                                <Col md={6} className="mb-3">
                                    <Form.Label htmlFor="lastName">Apellido</Form.Label>
                                    <Form.Control
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        required
                                    />
                                    <Form.Control.Feedback type="invalid">Se requiere un apellido válido.</Form.Control.Feedback>
                                </Col>
                            </Row>

                            <Form.Group className="mb-3">
                                <Form.Label htmlFor="email">Correo electrónico <span className="text-muted">(Opcional)</span></Form.Label>
                                <Form.Control
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                                <Form.Control.Feedback type="invalid">Por favor ingresa una dirección de correo electrónico válida para actualizaciones de envío.</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label htmlFor="address">Dirección</Form.Label>
                                <Form.Control
                                    type="text"
                                    id="address"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    required
                                />
                                <Form.Control.Feedback type="invalid">Por favor ingresa tu dirección de envío.</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label htmlFor="address2">Dirección 2 <span className="text-muted">(Opcional)</span></Form.Label>
                                <Form.Control
                                    type="text"
                                    id="address2"
                                    name="address2"
                                    value={formData.address2}
                                    onChange={handleChange}
                                />
                            </Form.Group>

                            <Row>
                                <Col md={5} className="mb-3">
                                    <Form.Label htmlFor="country">País</Form.Label>
                                    <Form.Control
                                        as="select"
                                        id="country"
                                        name="country"
                                        value={formData.country}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">Elige...</option>
                                        <option>Chile</option>
                                    </Form.Control>
                                    <Form.Control.Feedback type="invalid">Por favor selecciona un país válido.</Form.Control.Feedback>
                                </Col>
                                <Col md={4} className="mb-3">
                                    <Form.Label htmlFor="state">Región</Form.Label>
                                    <Form.Control
                                        as="select"
                                        id="state"
                                        name="state"
                                        value={formData.state}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">Elige...</option>
                                        <option>Región Metropolitana</option>
                                    </Form.Control>
                                    <Form.Control.Feedback type="invalid">Por favor proporciona un estado válido.</Form.Control.Feedback>
                                </Col>
                                <Col md={3} className="mb-3">
                                    <Form.Label htmlFor="zip">Código postal</Form.Label>
                                    <Form.Control
                                        type="text"
                                        id="zip"
                                        name="zip"
                                        value={formData.zip}
                                        onChange={handleChange}
                                        required
                                    />
                                    <Form.Control.Feedback type="invalid">Se requiere el código postal.</Form.Control.Feedback>
                                </Col>
                            </Row>
                            <hr className="mb-4" />
                            <Form.Check 
                                type="checkbox"
                                id="save-info"
                                name="saveInfo"
                                label="Guardar esta información para la próxima vez"
                                checked={formData.saveInfo}
                                onChange={handleChange}
                            />
                            <hr className="mb-4" />
                            <Button className="btn btn-flat btn-lg btn-block" type="submit">Continuar al pago</Button>
                        </Form>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
};
