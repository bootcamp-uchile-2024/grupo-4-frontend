
import "./Carrusel.css"
import Carousel from 'react-bootstrap/Carousel';


function Carrusel() {
  return (
    <Carousel>
      <Carousel.Item >
        <img src="src/imagenes/Img Carrusel/img1.jpg" alt="" />
        <Carousel.Caption>
          <h3>Café de Especialidad</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="src/imagenes/Img Carrusel/img2.jpg" alt="" />
        <Carousel.Caption>
          <h3>Paquetes personalizados</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="src/imagenes/Img Carrusel/img3.jpg" alt="" />
        <Carousel.Caption>
          <h3>Recolección ética</h3>
          <p>Garantiza que las comunidades vegetales dispondrán de suficientes reservas para prosperar y reproducirse, y que los animales locales que dependen de esas fuentes de alimento no sufrirán el saqueo de sus despensas</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="src/imagenes/Img Carrusel/img4.jpg" alt="" />
        <Carousel.Caption>
          <h3>Únete a nuestra comunidad</h3>
          <p>En el Foro puedes encontrar a otros entusiastas del café, recomendaciones y más!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="src/imagenes/Img Carrusel/img5.jpg" alt="" />
        <Carousel.Caption>
          <h3>Accesorios</h3>
          <p>Gran variedad para que puedas lograr un café perfecto.</p>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
  );
}

export default Carrusel;