import './css/nav.css'
import { NavLink } from 'react-router-dom'
// import {useState} from 'react'

const Nav = (data) =>{

    let user = data.user
    if(!user){
        user = 'Not username'
    }

    const logout = () =>{
        console.log("Logout success");
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
                <NavLink  to='/admin' className='menu-sub'>
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