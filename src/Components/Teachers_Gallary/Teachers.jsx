/* eslint-disable no-unused-vars */
// import teacherdata from "./Teachersdata";
import teacherdata from './Teacherdatanew';
import './Teacherdata.css'
import { useState } from "react";
import Teacherand from "./Teacherand";

const Teachers = () => {
    const [searchinp, setsearchinp] = useState("");
    const [btninp, setbtninp] = useState(teacherdata)
    const inputchange = (element) => {
        setsearchinp(element.target.value)
        console.log(searchinp);
    }
    const Displayitems = (searchdata) => {
        const searchmanu = teacherdata.filter((currElem) => {
            return (
                currElem.name.toString().toLowerCase().includes(searchinp.toString().toLowerCase()))
        })
        setbtninp(searchmanu)
    }
    return (
        <>
            <div className="teacher_inputs">
                <div className="searchbar">
                    <input type="text" placeholder="Search Teacher" onChange={inputchange} value={searchinp} />
                    <button className="searchbtn" onClick={() => Displayitems(btninp)}>Search</button>
                </div>
            </div>
            <Teacherand key={teacherdata.image} searchinp={btninp} dotdiv />
        </>
    )
}
export default Teachers;