import "./Footer.css"
import { NavLink } from "react-router-dom"

const Footer = () => {
    return(
        <>
            <div className="footer-container">
                <div className="upperfooter">
                    <div className="firstcol">
                        <img src="https://img.freepik.com/free-vector/gradient-high-school-logo-design_23-2149626932.jpg?size=626&ext=jpg&ga=GA1.1.2119131876.1701829576&semt=ais" alt="Logo" />
                        <p className="fctext">Jl. Siliwangi No 123, Cibadak, Cibadak, Sukabumi,Jawa Barat 43351, Indonesia, (0266)531333</p>
                        <p className="fcids1 fcid">info@smpn1cibadak.sch.id</p>
                        <p className="fcids2 fcid">smpn1cbd_kabsi@yahoo.co.id</p>
                    </div>
                    <div className="secondcol">
                        <h3 className="scrtitle">International Teachers</h3>
                        <div className="scdata">
                            <p>Ram Shankar Nikunj</p>
                            <p>Heera Thakur</p>
                            <p>Anand Kumar</p>
                            <p>Geeta Didi</p>
                            <p>Raj Malhotra</p>
                            <p>Khan Sir</p>
                        </div>
                    </div>
                    <div className="thiredcol">
                        <h3 className="scrtitle">Links</h3>
                        <div className="scdata">
                            <NavLink to={"/Gallery"} >Gallery</NavLink>
                            <NavLink to={"/Teachers"} >Teachers</NavLink>
                            <NavLink to={"/about"}>About</NavLink>
                            <NavLink to={"/contact"} >Contact Us</NavLink>
                            <NavLink to={"/blogs"} >Blogs</NavLink>
                        </div>
                    </div>
                    <div className="fourthcol">
                        <h3 className="scrtitle">Social Media</h3>
                        <div className="footerimg">
                            <img src="/src/Components/Homes/images/twitter.png" alt="" />
                            <img src="/src/Components/Homes/images/facebook.png" alt="" />
                            <img src="/src/Components/Homes/images/instagram.png" alt="" />
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="lowerfooter">
                <p className="copyright">Copyright &copy; VS SCHOOL All Rights Reserved.</p>
                </div>
            </div>
        </>
    )
}

export default Footer