import './css/nav.css'
import { NavLink } from 'react-router-dom'
import {useState, useEffect} from 'react'

const Nav = (data) =>{

    const [ status, setStatus] = useState(data.role)
    


    useEffect(()=>{
        setStatus(data.role)
    },[data])


    let user = data.user
    if(!user){
        user = 'Not username'
    }    
    

    const logout = () =>{
        localStorage.removeItem('token');
        window.location.href = "/login"
    }

    return(
        <div className='main-nav'>
            <div className='logo'>
                <h2>SHOP KUB</h2>
            </div>
            <div className='menu'>
                <NavLink to='/shop' className='menu-sub'>
                    <i className="fa-solid fa-shop"></i>
                    <p>SHOP</p>
                </NavLink>
                <NavLink to='/cart' className='menu-sub'>
                    <i className="fa-solid fa-cart-shopping"></i>
                    <p>CART</p>
                </NavLink>
                <NavLink  to='/admin' className='menu-sub' style={{display:status ? 'flex':'none'}}>
                    <i className="fa-solid fa-user-tie"></i>    
                    <p>ADMIN</p>
                </NavLink>
            </div>
            <div className='nav-right'>
                <h4>{user}</h4>
                <button onClick={logout}><h4>Logout</h4></button>
            </div>
        </div>
    )
}

export default Nav