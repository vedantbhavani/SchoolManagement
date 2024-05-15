import teacherdata from "./Teachersdata";
import './Teacherdata.css'
import { useRef, useState } from "react";

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

    if (index == 5) {
        dot7.current.style.backgroundColor = "gray"
        console.log("genius");
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

    const Displayitems = (searchbar) => {
        searchbar.map((currElem) => {
            let { image, name, subject, experience } = currElem
            return (
                `
                    <div className="teachercard">
                        <img className="tc_images" src=${image} alt="" />
                        <p className="tc_data tc_names"><b> Name : </b><span className="innername">${name}</span></p>
                        <p className="tc_data tc_subject"><b> Subject :</b> <span className="innersubject">${subject}</span></p>
                        <p className="tc_data tc_experience"><b> Experience : </b><span className="innerexp">${experience}</span></p>
                    </div>
                `
            )
        })
    }
    const searchref = useRef(null)
    const [searchinp, setsearchinp] = useState("");
    const inputchange = (e) => {
        setsearchinp(e.target.value)
        console.log(searchinp);
    }
    const searchdata = teacherdata.filter((currElem) => {
        return (currElem.name.toLocaleLowerCase().includes(searchinp.toLocaleLowerCase()))
    })
    Displayitems(searchdata)


    return (
        <>
            <div className="searchbar">
                <input type="text" ref={searchref} placeholder="Search Teacher" onChange={inputchange} value={searchinp} />
            </div>
            <div className="Teachercontainer">
                <div className="teacherdata" ref={sliderref}>
                    {/* <Displayitems /> */}
                    {
                        teacherdata.map((currElem) => {
                            return (
                            <>
                                <div className="teachercard">
                                    <img className="tc_images" src={currElem.image} alt="" />
                                    <p className="tc_data tc_names"><b> Name : </b><span className="innername">{currElem.name}</span></p>
                                    <p className="tc_data tc_subject"><b> Subject :</b> <span className="innersubject">{currElem.subject}</span></p>
                                    <p className="tc_data tc_experience"><b> Experience : </b><span className="innerexp">{currElem.experience}</span></p>
                                </div>
                            </>
                        )
                    })
                    }
                </div>
            </div>
            <div className="Allbtns">
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
        </>
    )
}

export default Teachers;