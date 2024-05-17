/* eslint-disable no-unused-vars */
import teacherdata from "./Teachersdata";
import './Teacherdata.css'
import { useState } from "react";
import Teacherand from "./Teacherand";

const Teachers = () => {
    const [searchinp, setsearchinp] = useState("");
    const [btninp, setbtninp] = useState(teacherdata)
    const [experiences, setexperience] = useState(teacherdata)
    const inputchange = (element) => {
        setsearchinp(element.target.value)
        console.log(searchinp);
    }
    const changeexp = (element) => {
        setexperience(element.target.value)
    }
    console.log(experiences);
    const Displayitems = (searchdata) => {
        const searchmanu = teacherdata.filter((currElem) => {
            return (
                currElem.name.toString().toLowerCase().includes(searchinp.toString().toLowerCase()) && currElem.experience == experiences)
        })
        setbtninp(searchmanu)
    }

    return (
        <>
            <div className="teacher_inputs">
                <div className="searchbar">
                    <input type="text" placeholder="Search Teacher" onChange={inputchange} value={searchinp} />
                    <select name="experience" value={experiences} onChange={changeexp} id="experience">
                        <option value="Select">Select</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                    <button onClick={() => Displayitems(btninp)}>Search</button>
                </div>
            </div>
            <Teacherand key={teacherdata.image} searchinp={btninp} />
        </>
    )
}
export default Teachers;