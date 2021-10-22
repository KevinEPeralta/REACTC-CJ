import React from 'react'
import CartWidget from './CartWidget/CartWidget'

const NavBar = () =>{
    return(
        <div className = 'app-navbar'>
            <div className='navbar-img'>
                <CartWidget />
            </div>
            <div className='navbar-menu'>
                <p>Home</p>
                <p>Artículos</p>
            </div>
        </div>
    )
}

export default NavBar