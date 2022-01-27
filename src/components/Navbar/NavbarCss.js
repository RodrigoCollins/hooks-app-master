import React from 'react'
import remera1 from '../../assets/png/logo512.png'
import CartWidget from './CartWidget'
import './Navbar.css'
import { Link } from 'react-router-dom'


const NavbarCss = () => {
    return (
        <div className='navbar'>
            <h3>La Tiendita</h3>
            <img src={remera1} alt="logo" />
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/categoria/zapatillas'>Zapatillas</Link>
                    </li>
                    <li>
                        <Link to='/categoria/remeras'>Remeras</Link>
                    </li>
                    <li>
                        <Link to='/cart'><CartWidget /></Link>
                    </li>
                </ul>

            </nav>
        </div>

    )
}

export default NavbarCss
