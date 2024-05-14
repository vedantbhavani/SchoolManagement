import "./Slider.css"
import sliderimg from "./images/left-arrow.png"
import { useRef } from "react"
import images from "./images"
    
const Slider = () => {
    let index = 1;
    const imgslider = useRef(null)
    const rightside = () => {
        imgslider.current.style.transform = `translateX(-${index * 75}vw)`
        index++
    }
    const getfirstside = () => {
        imgslider.current.style.transform = `translateX(${0}vw)`
        index = 1
    }
    const maxrightside = () => {
        imgslider.current.style.transform = `translateX(-${(images.length-9) * 75}vw)`
        index = images.length-8;
    }
    const leftside = () => {
        imgslider.current.style.transform = `translateX(-${(index-2) * 75}vw)`
        index--
    }
    const leftslide = () => {
        index <= 1 ? maxrightside() : leftside()
    }
    const rightslide = () => {
        index < images.length-8 ? rightside() : getfirstside()
    }
    setInterval(() => {
        index < images.length-8 ? rightside() : getfirstside()
    }, 10000);
    return(
        <>
            <div className="full-slider">
                <h2 className="slider-title">Our Best Facultys</h2>
                <div className="start-slider">
                    <img className="leftimgslider imgsliderimg" onClick={leftslide} src={sliderimg} alt="changeakdsf" />
                    <div className="frame">
                        <div className="slider" ref={imgslider}>
                            {images.map((currElem)=> {
                                return(
                                    <>
                                    <div className="slides">
                                    <img key={currElem.id} src={currElem.imagg} alt="" className="slide-img" />
                                    <p className="slides-text">{currElem.name}</p>
                                    </div>
                                    </>
                                )
                            })}
                        </div>
                    </div>
                    <img className="rightimgslider imgsliderimg" onClick={rightslide} src={sliderimg} alt="changeakdsf" />
                </div>
            </div>
        </>
    )
}

export default Slider