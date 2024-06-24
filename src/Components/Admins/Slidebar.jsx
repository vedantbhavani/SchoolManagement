import { NavLink } from 'react-router-dom'
import './Slidebar.css'

const Slidebar = () => {
    const chalu = () => {
        document.getElementById('slidebar').classList.toggle('active')
    }
  return (
    <div className='slidebar-container'>
        <button className="first toggleimg" onClick={chalu}> 
            <img src="/public/menu.png" className="png" alt=""/>
        </button>
        <div className="slidebar "  id="slidebar">
            <button className="second toggleimg" onClick={chalu}>
            <img src="/public/cross.png" alt="" className="png "/>
            </button>
            <ul className="item-ul">
                <li className="item-li"><NavLink className='item' to={"/home"} >Home</NavLink></li>
                <li className="item-li"><NavLink className='item' to={"/gallery"} >Gallery</NavLink></li>
                <li className="item-li"><NavLink className='item' to={"/teachers"} >Teachers</NavLink></li>
                <li className="item-li"><NavLink className='item' to={"/home"} >Home</NavLink></li>
                <li className="item-li"><NavLink className='item' to={"/home"} >Home</NavLink></li>
                <li className="item-li"><NavLink className='item' to={"/home"} >Home</NavLink></li>
            </ul>
        </div>
    </div>
  )
}

export default Slidebar
