import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                    <div className="container-fluid">
                        <NavLink exact activeClassName='active' to='/home' className="nav-link">useContext</NavLink>
                        <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                            <NavLink exact activeClassName='active' to='/home' className="nav-link">Home</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink exact activeClassName='active' to='/about' className="nav-link">About</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink exact activeClassName='active' to='/login' className="nav-link">LogIn</NavLink>
                            </li>

                        </ul>
                        </div>
                    </div>
    </nav>

    )
}

export default Navbar
