import teacherdata from "./Teachersdata";
import './Teacherdata.css'
import { useRef, useState } from "react";
import Teacherand from "./Teacherand";

const Teachers = () => {
    const searchref = useRef(null)
    const [searchinp, setsearchinp] = useState("");
    const [btninp , setbtninp] = useState(teacherdata)
    const inputchange = (element) => {
        setsearchinp(element.target.value)
        console.log(searchinp);
    }
    const Displayitems = (searchdata) => {
        console.log(searchdata);
        const searchmanu = teacherdata.filter((currElem) => {
            return (currElem.name.toString().toLowerCase().includes(searchinp.toString().toLowerCase()))
        })
        setbtninp(searchmanu)
    }

    return (
        <>
            <div className="searchbar">
                <input type="text" ref={searchref} placeholder="Search Teacher" onChange={inputchange} value={searchinp} />
                <button onClick={() => Displayitems(btninp)}>Search</button>
            </div>
            <Teacherand key={teacherdata.image} searchinp={btninp} />
        </>
    )
}
export default Teachers;