/* eslint-disable react/prop-types */
import { useRef } from "react";
import teacherdata from "./Teachersdata";
import { Link } from "react-router-dom";

const Teacherand = ({ searchinp }) => {
    const displayref = useRef(null)
    const sliderref = useRef(null);
    let index = 1;
    const dot1 = useRef(null)
    const dot2 = useRef(null)
    const dot3 = useRef(null)
    const dot4 = useRef(null)
    const dot5 = useRef(null)
    const dot6 = useRef(null)
    const dot7 = useRef(null)

    const newfunc = () => {
        switch (index) {
            case 0:
                dot7.current.style.backgroundColor = "transparent"
                dot1.current.style.backgroundColor = "gray"
                dot2.current.style.backgroundColor = "transparent"
                break;
            case 1:
                dot1.current.style.backgroundColor = "transparent"
                dot2.current.style.backgroundColor = "gray"
                dot3.current.style.backgroundColor = "transparent"
                break;
            case 2:
                dot2.current.style.backgroundColor = "transparent"
                dot3.current.style.backgroundColor = "gray"
                dot4.current.style.backgroundColor = "transparent"
                break;
            case 3:
                dot3.current.style.backgroundColor = "transparent"
                dot4.current.style.backgroundColor = "gray"
                dot5.current.style.backgroundColor = "transparent"
                break;
            case 4:
                dot4.current.style.backgroundColor = "transparent"
                dot5.current.style.backgroundColor = "gray"
                dot6.current.style.backgroundColor = "transparent"
                break;
            case 5:
                dot5.current.style.backgroundColor = "transparent"
                dot6.current.style.backgroundColor = "gray"
                dot7.current.style.backgroundColor = "transparent"
                break;
            case 6:
                dot6.current.style.backgroundColor = "transparent"
                dot7.current.style.backgroundColor = "gray"
                dot1.current.style.backgroundColor = "transparent"
                dot2.current.style.backgroundColor = "transparent"
                break;
            case 7:
                dot1.current.style.backgroundColor = "gray"
                dot7.current.style.backgroundColor = "transparent"
                dot2.current.style.backgroundColor = "transparent"
                dot3.current.style.backgroundColor = "transparent"
                dot4.current.style.backgroundColor = "transparent"
                dot5.current.style.backgroundColor = "transparent"
                dot6.current.style.backgroundColor = "transparent"
                dot7.current.style.backgroundColor = "transparent"
                break;
            default:
                console.log("none print");
                break;
        }

    }

    const gopreviosslide = () => {
        sliderref.current.style.transform = `translateX(-${(index - 2) * 75}vw)`
        index--
        newfunc()
    }

    const getfirstside = () => {
        sliderref.current.style.transform = `translateX(${0}vw)`
        index = 1
    }
    const gonextslide = () => {
        sliderref.current.style.transform = `translateX(-${index * 75}vw)`
        index++
    }
    const maxrightside = () => {
        sliderref.current.style.transform = `translateX(-${(teacherdata.length - 57) * 75}vw)`
        index = teacherdata.length - 56;
    }
    const nextslide = () => {
        newfunc()
        index < teacherdata.length - 56 ? gonextslide() : getfirstside()
    }
    const previosslide = () => {
        index <= 1 ? maxrightside() : gopreviosslide()
    }


    return (
        <>
            <div key={searchinp} className="Teachercontainer">
                <div className="teacherdata" ref={sliderref}>
                    {
                        searchinp.map((currElem) => {
                            return (
                                <>
                                <Link className="teacherdatalink" to={""}>
                                    <div className="teachercard">
                                        <img className="tc_images" src={currElem.image} alt="" />

                                        <p className="tc_data tc_names"><b> Name : </b><span className="innername">{currElem.name}</span></p>

                                        <p className="tc_data tc_subject"><b> Subject :</b> <span className="innersubject">{currElem.subject}</span></p>

                                        <p className="tc_data tc_experience"><b> Experience : </b><span className="innerexp">{currElem.experience}</span></p>
                                    </div>
                                </Link>
                                </>
                            )
                        })
                    }
                </div>
                <div className="Allbtns" ref={displayref}>
                    <button className="btns pre-slide" onClick={previosslide}> <img src="/src/Components/Teachers_Gallary/arrow.png" className="btnimg" alt="" /></button>
                    <div className="innerbtns">
                        <div className="dots" ref={dot1}></div>
                        <div className="dots" ref={dot2}></div>
                        <div className="dots" ref={dot3}></div>
                        <div className="dots" ref={dot4}></div>
                        <div className="dots" ref={dot5}></div>
                        <div className="dots" ref={dot6}></div>
                        <div className="dots" ref={dot7}></div>
                    </div>

                    <button className="btns next-slide" onClick={nextslide}> <img src="/src/Components/Teachers_Gallary/arrow.png" className="btnimg" alt="" /></button>
                </div>
            </div>
        </>
    )
}

export default Teacherand ;
