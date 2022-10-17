import React from 'react'
import { Link } from 'react-router-dom'
import NavbarCSS from './navbar.module.scss'
import Logo from './../../Assets/Images/logo.png'

export default function Navbar() {
    return (
        <div className={NavbarCSS.nav}>
            <input type="checkbox" id={NavbarCSS.navCheck} />
            <div className={NavbarCSS.navHeader}>
                <div className={NavbarCSS.navBrand}>
                    <Link to="/">
                        <img src={Logo} alt="Our Logo" />
                    </Link>
                </div>
            </div>
            <div className={NavbarCSS.navBtn}>
                <label htmlFor={NavbarCSS.navCheck}>
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
            </div>

            <div className={NavbarCSS.navLinks}>
                <Link to="/">Home</Link>
                <Link to="#" target="_blank" rel='noreferrer'>Feature</Link>
                <Link to="#" target="_blank" rel='noreferrer'>System Req.</Link>
                <Link to="#" target="_blank" rel='noreferrer'>Top Score</Link>
                <Link to="#" target="_blank" rel='noreferrer'>Newsletter</Link>
                <Link to="/login">Log In</Link>
            </div>
        </div>
    )
}