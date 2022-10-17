import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './../Pages/Home/home'
import Lobby from './../Pages/Lobby/lobby'
import Login from './../Pages/Login/login'
import Register from './../Pages/Register/register'
import Room from './../Pages/Room/room'

export default function Router() {
    return (
        <Routes>
            <Route path='/' index element={<Home />} />
            <Route path='/lobby' index element={<Lobby />} />
            <Route path='/login' index element={<Login />} />
            <Route path='/register' index element={<Register />} />
            <Route path='/room/:id' index element={<Room />} />
        </Routes>
    )
}
