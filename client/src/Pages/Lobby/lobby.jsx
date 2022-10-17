import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../Components/Navbar/navbar'
import LobbyCSS from './lobby.module.scss'

export default function Home() {
    const rooms = [
        { id: 1, name: 'Room 1' },
        { id: 2, name: 'Room 2' },
        { id: 3, name: 'Room 3' },
        { id: 4, name: 'Room 4' },
        { id: 5, name: 'Room 5' }
    ]

    const navigate = useNavigate()
    const handleRoom = (id) => {
        navigate('/room/' + id)
    }

    useEffect(() => {
        document.title = 'Lobby';
    })

    return (
        <>
            <Navbar />
            <section className={LobbyCSS.gameLobby}>
                <h1>SELECT ROOM</h1>
                <table className={LobbyCSS.table}>
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>Name</td>
                            <td>Player</td>
                            <td width={100}>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        {rooms.map((item) => {
                            return (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>2/2</td>
                                    <td>
                                        <button
                                            className={LobbyCSS.button}
                                            onClick={() => handleRoom(item.id)}>
                                            Join
                                        </button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </section>
        </>
    )
}
