import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import LoginCSS from './login.module.scss'
import Logo from './../../Assets/Images/logo.png'
import axios from './../../Utils/axios'

export default function Home() {
    useEffect(() => {
        document.title = 'Login';
    })

    const [value, setValue] = useState({
        email: '',
        password: '',
    })

    const handleChange = (name) => (e) => {
        setValue({ ...value, [name]: e.target.value })
    }

    const handleLogin = async (e) => {
        e.preventDefault()
        try {
            const { data } = await axios.post('/api/auth', {
                email: value.email,
                password: value.password,
            })
            localStorage.setItem('_q', data.data.token)
            window.location.reload()
        } catch (err) {
            alert('Login Error: ' + err.message)
        }
    }
    return (
        <>
            <div className={LoginCSS.background}>
                <div className={LoginCSS.shape}></div>
                <div className={LoginCSS.shape}></div>
            </div>
            <form className={LoginCSS.loginForm}>
                <img src={Logo} alt="Our Logo" />

                <label htmlFor="username">E-mail</label>
                <input type="text" placeholder="Username" id="username" autoComplete='off' onChange={handleChange('email')} />

                <label htmlFor="password">Password</label>
                <input type="password" placeholder="Password" id="password" onChange={handleChange('password')} autoComplete="off" />

                <button onClick={handleLogin}>Log In</button>
                <p style={{ textAlign: 'center' }}><small><em style={{ color: '#A5A5A5' }}>Doesn't have any account ? <Link to='/register'>Register</Link></em></small></p>
                <p style={{ textAlign: 'center' }}><small><em style={{ color: '#A5A5A5' }}><Link to='/'>Back to Home</Link></em></small></p>
            </form>
        </>
    )
}
