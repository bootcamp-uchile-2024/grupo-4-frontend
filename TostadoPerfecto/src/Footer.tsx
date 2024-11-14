import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

import "./Footer.css"

function Footer() {
    return (
        <>
            <div id="footer">
                <section>
                    <div>
                        <div className="seccion-categoria">
                            <span>Productos</span>
                            <a href="">Café</a>
                            <a href="">Accesorios</a>
                            <a href="">Máquinas</a>
                            <a href="">Complementos</a>
                        </div>
                        <div className="seccion-categoria">
                            <span>Regalos</span>
                            <a href="">Box</a>
                            <a href="">Giftcard</a>
                            <a href="">Precios</a>
                        </div>
                    </div>
                    <div>
                        <div className="seccion-categoria">
                            <span>Suscripción</span>
                            <a href="">Planes</a>
                        </div>
                        <div className="seccion-categoria">
                            <span>Impacto</span>
                            <a href="">Sustentabilidad</a>
                            <a href="">Certificaciones</a>
                            <a href="">Colaboraciones</a>
                        </div>
                    </div>
                    <div>
                        <div className="seccion-categoria">
                            <span>Aprender</span>
                            <a href="">Guías preparación</a>
                            <a href="">Blog</a>
                            <a href="">Quiz</a>
                        </div>
                        <div className="seccion-categoria">
                            <span>Nosotros</span>
                            <a href="">Misión</a>
                            <a href="">Historia</a>
                            <a href="">Equipo</a>
                        </div>
                    </div>
                </section>
                <div className="seccion-iconos">
                    <a href=""><FaTwitter /></a>
                    <a href=""><FaInstagram /></a>
                    <a href=""><FaFacebook /></a>
                </div>
                <div className="seccion-legal">
                    <a href="">Políticas de privacidad</a>
                    <a href="">Términos de venta</a>
                    <a href="">Términos de uso</a>
                </div>
            </div>
        </>
    )
}

export default Footer;