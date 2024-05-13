import teacherdata from "./Teachersdata";
import './Teacherdata.css'
import { useRef } from "react";

const Teachers = () => {
    let index = 1;
    const sliderref = useRef(null);
    const dot1 = useRef(null)
    const dot2 = useRef(null)
    const dot3 = useRef(null)
    const dot4 = useRef(null)
    const dot5 = useRef(null)
    const dot6 = useRef(null)
    const dot7 = useRef(null)

    const gopreviosslide = () => {
        console.log("Change");
        sliderref.current.style.transform = `translateX(-${(index - 2) * 75}vw)`
        index--
    }
    const getfirstside = () => {
        sliderref.current.style.transform = `translateX(${0}vw)`
        index = 1
    }

    const gonextslide = () => {
        console.log("Change");
        sliderref.current.style.transform = `translateX(-${index * 75}vw)`
        index++
    }
    const maxrightside = () => {
        sliderref.current.style.transform = `translateX(-${(teacherdata.length - 57) * 75}vw)`
        index = teacherdata.length - 56;
    }
    const nextslide = () => {
        index < teacherdata.length - 56 ? gonextslide() : getfirstside()
    }
    const previosslide = () => {
        index <= 1 ? maxrightside() : gopreviosslide()
    }
    return (
        <>
            <div className="searchbar">
                <input type="text" placeholder="Search Teacher" />
            </div>
            <div className="Teachercontainer">
                <div className="teacherdata" ref={sliderref}>
                    {teacherdata.map((currElem) => {
                        return (
                            <>
                                <div className="teachercard">
                                    <img className="tc_images" src="https://picsum.photos/200" alt="" />
                                    <p className="tc_data tc_names">Name : <span className="innername">{currElem.name}</span></p>
                                    <p className="tc_data tc_subject">Subject : <span className="innersubject">{currElem.subject}</span></p>
                                    <p className="tc_data tc_experience">Experience : <span className="innerexp">{currElem.experience}</span></p>
                                </div>
                            </>
                        )
                    })}
                </div>
            </div>
            <div className="Allbtns">
                <button className="btns pre-slide" onClick={previosslide}> <img src="/src/Components/Teachers/arrow.png" className="btnimg" alt="" /></button>

                {/* <div className="innerbtns">
                    <button className="innerbtndata innerbtn1" ref={btn1} >1</button>
                    <button className="innerbtndata innerbtn2" ref={btn2} >2</button>
                    <button className="innerbtndata innerbtn3" ref={btn3} >3</button>
                    <button className="innerbtndata innerbtn4" ref={btn4} >4</button>
                    <button className="innerbtndata innerbtn5" ref={btn5} >5</button>
                    <button className="innerbtndata innerbtn6" ref={btn6} >6</button>
                    <button className="innerbtndata innerbtn7" ref={btn7} >7</button>
                </div> */}
                <div className="innerbtns">
                    <div className="dots" ref={dot1}></div>
                    <div className="dots" ref={dot2}></div>
                    <div className="dots" ref={dot3}></div>
                    <div className="dots" ref={dot4}></div>
                    <div className="dots" ref={dot5}></div>
                    <div className="dots" ref={dot6}></div>
                    <div className="dots" ref={dot7}></div>
                </div>

                <button className="btns next-slide" onClick={nextslide}> <img src="/src/Components/Teachers/arrow.png" className="btnimg" alt="" /></button>

            </div>
        </>
    )
}

export default Teachers;