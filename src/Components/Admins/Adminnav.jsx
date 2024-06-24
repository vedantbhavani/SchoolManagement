import React from 'react'
import './Admin.css'

const Adminnav = () => {
    return (
        <div>
            <div className="adminnavbar">
                <div className="leftside">
                <img src="https://img.freepik.com/free-vector/gradient-high-school-logo-design_23-2149626932.jpg?size=626&ext=jpg&ga=GA1.1.2119131876.1701829576&semt=ais" alt="Logo" />
                    <p>...Administrator/Admin</p>
                </div>
                <div className="rightside">
                    <img src="/public/user.png" className='userimg' alt="user" />
                    <p>Vedant</p>
                </div>
            </div>
        </div>
    )
}

export default Adminnav
