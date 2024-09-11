import { useState } from "react"
import "./ImageSlider.css"

import { ArrowBigLeft, ArrowBigRight } from "lucide-react"

type ImageSliderProps = {
    imageUrls: string[]
}

export function ImageSlider({ imageUrls }: ImageSliderProps) {
    const [imageIndex, setImageIndex] = useState(0)

function showPrevImg(){
    setImageIndex (index => {
        if (index == 0) return imageUrls.length - 1
        return index - 1
    })
}


function showNextImg(){
    setImageIndex (index => {
        if (index == imageUrls.length - 1) return 0
        return index + 1
    })
}




    return (
        <div style={{width: "100%", height: "100%", position: "relative"}}>
            <img src={imageUrls[imageIndex]} className="img-slider-img" />
            <button className="img-slider-btn" onClick={showPrevImg} style={{left: 0}}><ArrowBigLeft/></button>
            <button className="img-slider-btn" onClick={showNextImg}  style={{right: 0}}><ArrowBigRight/></button>
        </div>

    )
}