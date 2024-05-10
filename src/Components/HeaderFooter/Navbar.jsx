/* eslint-disable react/prop-types */
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = (props) => {
    return (
        <div className='nav-container'>
            <div className="fullheader">
                <div className="upperheader">
                </div>
                <div className="lowerheader">
                    <div className="upperlower">
                        <div >
                            <img className="main-logo" src="https://img.freepik.com/free-vector/gradient-high-school-logo-design_23-2149626932.jpg?size=626&ext=jpg&ga=GA1.1.2119131876.1701829576&semt=ais" alt="" />
                        </div>
                        <div className="nav-lists">
                            
                            <Link to={"/"} >Home</Link>
                            <Link to={"/Gallery"} >Gallery</Link>
                            <Link to={"/Teachers"} >Teachers</Link>
                            <Link to={"/about"}>About</Link>
                            <Link to={"/contact"} >Contact Us</Link>
                            <Link to={"/blogs"} >Blogs</Link>
                        </div>
                    </div>
                    <div className="lowerlower">
                        <p className='title-head'>VS SCHOOL</p>
                        <p className='title-center-heading'>{props.headertitle}</p>
                        <p className='title-center-desc'>{props.headerdesc}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar