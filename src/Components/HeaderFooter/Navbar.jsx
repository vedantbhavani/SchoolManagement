/* eslint-disable react/prop-types */
import { useRef } from 'react';
import './Navbar.css'
import { NavLink } from 'react-router-dom'

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
                            <NavLink  ref={linkref} to={"/home"} >Home</NavLink>
                            <NavLink  ref={linkref} to={"/gallery"} >Gallery</NavLink>
                            <NavLink  ref={linkref} to={"/teachers"} >Teachers</NavLink>
                            <NavLink  ref={linkref} to={"/about"}>About</NavLink>
                            <NavLink  ref={linkref} to={"/contact"} >Contact Us</NavLink>
                            <NavLink  ref={linkref} to={"/blogs"} >Blogs</NavLink>
                        </div>
                        <div className="nav-lists nav_reg">
                            <NavLink  ref={linkref} to={"/register"} >Register</NavLink>
                            <NavLink  ref={linkref} to={"/login"} >Login</NavLink>
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