/* eslint-disable react/prop-types */
import { useRef } from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = (props) => {
    const activepage = window.location
    const linkref = useRef(activepage)
    
    return (
        <div className='nav-container'>
            <div className="fullheader">
                <div style={{display:`${props.displayon}`}} className="upperheader">
                </div>
                <div className="lowerheader">
                    <div className="upperlower">
                        <div>
                            <img className="main-logo" src="https://img.freepik.com/free-vector/gradient-high-school-logo-design_23-2149626932.jpg?size=626&ext=jpg&ga=GA1.1.2119131876.1701829576&semt=ais" alt="" />
                        </div>
                        <div className="nav-lists">
                            <Link ref={linkref} to={"/home"} >Home</Link>
                            <Link ref={linkref} to={"/gallery"} >Gallery</Link>
                            <Link ref={linkref} to={"/teachers"} >Teachers</Link>
                            <Link ref={linkref} to={"/about"}>About</Link>
                            <Link ref={linkref} to={"/contact"} >Contact Us</Link>
                            <Link ref={linkref} to={"/blogs"} >Blogs</Link>
                        </div>
                    </div>
                    <div className="lowerlower"  style={{display:`${props.displayon}`}}>
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