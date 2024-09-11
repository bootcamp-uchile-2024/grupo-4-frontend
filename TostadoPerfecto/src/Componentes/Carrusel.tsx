import img1 from "../imagenes/Img Carrusel/img1.jpg"
import img2 from "../imagenes/Img Carrusel/img2.jpg"
import img3 from "../imagenes/Img Carrusel/img3.jpg"
import img4 from "../imagenes/Img Carrusel/img4.jpg"
import img5 from "../imagenes/Img Carrusel/img5.jpg"
import { ImageSlider } from "./ImageSlider"

const ImagenesCarrusel = [img1, img2, img3, img4, img5]

export function Carrusel(){

  return (
    <div style={{
      maxWidth: "1200px",
      width: "100%",
      aspectRatio: "5/2",
      margin: "0 auto",
    }}>

      <ImageSlider imageUrls={ImagenesCarrusel}/>
    </div>
    )
}