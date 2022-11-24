import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../Components/Navbar/navbar'
import LobbyCSS from './lobby.module.scss'
import axios from './../../Utils/axios'

export default function Home() {
    const navigate = useNavigate()
    const [data, setData] = useState([])

    const handleRoom = (id) => {
        navigate('/room/' + id)
    }

    useEffect(() => {
        document.title = 'Lobby';
        getRoomAxios()
    }, [])

    const getRoomAxios = async () => {
        const { data } = await axios.get('/api/rooms')
        setData(data.data)
    }

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
                        {data.map((item) => {
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
