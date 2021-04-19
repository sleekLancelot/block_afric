import React from 'react'
import { Link } from 'react-router-dom'

import '../../css/Navbar.css'
import logo from '../assets/LogoMakr-5PTESv.png'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className="logo">
                <Link to='/'>
                    <img src={logo} alt="logo" />
                    <span>ribbon</span>
                </Link>
            </div>

            {/* Desktop & Tablet Navigation */}
            <ul className="desktopNav">
                <li className="navLink">
                    <Link to='/' >Home</Link>
                </li>
                <li className="navLink">
                    <Link to='/activity'>Activity</Link>
                </li>
                <li className="navLink">
                    <Link to='/wallet'>Wallet</Link>
                </li>
                <li className="navLink">
                    <Link to='/market'>Market</Link>
                </li>
                <li className="navLink">
                    <Link to='/earn'>Earn</Link>
                </li>
            </ul>

            {/* Mobile Navigation */}
            <ul className="mobileNav">
                <li className="navLink">
                    <Link to='/'>
                        <i className="fas fa-home"></i>
                        <span>Home</span>
                    </Link>
                </li>
                <li className="navLink">
                    <Link to='/activity'>
                        <i className="fas fa-poll-h"></i>
                        <span>Activity</span>
                    </Link>
                </li>
                <li className="navLink">
                    <Link to='/wallet'>
                        <i className="fas fa-wallet"></i>
                        <span>Wallet</span>
                    </Link>
                </li>
                <li className="navLink">
                    <Link to='/market'>
                        <i className="fas fa-luggage-cart"></i>
                        <span>Market</span>
                    </Link>
                </li>
                <li className="navLink">
                    <Link to='/earn'>
                        <i className="fas fa-gift"></i>
                        <span>Earn</span>
                    </Link>
                </li>
            </ul>

            <div className="nav3rdSect">
                <i className="fas fa-user-circle"></i>
                <i className="fas fa-bell"></i>
            </div>
        </nav>
    )
}

export default Navbar
