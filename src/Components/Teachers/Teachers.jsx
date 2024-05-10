import teacherdata from "./Teachersdata";
import './Teacherdata.css'

const Teachers = () => {
    return (
        <>
            <div className="searchbar">
                <input type="text" placeholder="Search Teacher" />
            </div>
            <div className="Teachercontainer">
                <div className="teacherdata">
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
        </>
    )
}

export default Teachers;