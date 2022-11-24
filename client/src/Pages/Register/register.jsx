import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import LoginCSS from './../Login/login.module.scss'
import Logo from './../../Assets/Images/logo.png'
import axios from 'axios'

export default function Home() {
    useEffect(() => {
        document.title = 'Register';
    })

    const [value, setValue] = useState({
        name: '',
        email: '',
        password: ''
    })

    const handleChange = (name) => (e) => {
        setValue({ ...value, [name]: e.target.value })
    }

    const handleRegister = async (e) => {
        e.preventDefault()
        const { data } = await axios.post('http://localhost:5001/api/users', {
            name: value.name,
            email: value.email,
            password: value.password,
        })

        console.log(data, value)
    }

    return (
        <>
            <div className={LoginCSS.background}>
                <div className={LoginCSS.shape}></div>
                <div className={LoginCSS.shape}></div>
            </div>
            <form className={LoginCSS.loginForm}>
                <img src={Logo} alt="Our Logo" />

                <label htmlFor="name">Name</label>
                <input type="text" placeholder="Name" id="name" autoComplete='off' onChange={handleChange} />

                <label htmlFor="username">E-Mail</label>
                <input type="text" placeholder="Username" id="username" autoComplete='off' onChange={handleChange} />

                <label htmlFor="password">Password</label>
                <input type="password" placeholder="Password" id="password" onChange={handleChange} />

                <button onClick={handleRegister}>Register</button>
                <p style={{ textAlign: 'center' }}><small><em style={{ color: '#A5A5A5' }}>Already have an account ? <Link to='/login'>Log In</Link></em></small></p>
                <p style={{ textAlign: 'center' }}><small><em style={{ color: '#A5A5A5' }}><Link to='/'>Back to Home</Link></em></small></p>
            </form>
        </>
    )
}
