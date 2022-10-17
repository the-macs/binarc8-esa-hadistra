import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import LoginCSS from './login.module.scss'
import Logo from './../../Assets/Images/logo.png'

export default function Home() {
    useEffect(() => {
        document.title = 'Login';
    })
    return (
        <>
            <div className={LoginCSS.background}>
                <div className={LoginCSS.shape}></div>
                <div className={LoginCSS.shape}></div>
            </div>
            <form className={LoginCSS.loginForm}>
                <img src={Logo} alt="Our Logo" />

                <label htmlFor="username">Username</label>
                <input type="text" placeholder="Username" id="username" autoComplete='off' />

                <label htmlFor="password">Password</label>
                <input type="password" placeholder="Password" id="password" />

                <button>Log In</button>
                <p style={{ textAlign: 'center' }}><small><em style={{ color: '#A5A5A5' }}>Doesn't have any account ? <Link to='/register'>Register</Link></em></small></p>
                <p style={{ textAlign: 'center' }}><small><em style={{ color: '#A5A5A5' }}><Link to='/'>Back to Home</Link></em></small></p>
            </form>
        </>
    )
}
