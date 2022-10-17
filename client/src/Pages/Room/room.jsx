import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../../Components/Navbar/navbar'
import RoomCSS from './room.module.scss'

import Paper from './../../Assets/Images/paper.png'
import Rock from './../../Assets/Images/rock.png'
import Scissor from './../../Assets/Images/scissor.png'

export default function Home() {
    const { id } = useParams()
    useEffect(() => {
        document.title = 'Room';
    })

    return (
        <>
            <Navbar />
            <section className={RoomCSS.gameRoom}>
                <h1>Game Room {id}</h1>
                <div className={RoomCSS.row}>
                    <div>
                        <h1 className={RoomCSS.playerName}>Player 1</h1>
                        <div className={RoomCSS.gameOptions}>
                            <div className={RoomCSS.rpsOptions}>
                                <img src={Scissor} alt='Scissor' />
                            </div>
                            <div className={RoomCSS.rpsOptions}>
                                <img src={Rock} alt='Rock' />
                            </div>
                            <div className={RoomCSS.rpsOptions} >
                                <img src={Paper} alt='Paper' />
                            </div>
                        </div>
                    </div>
                    <div>
                        <h1 className={RoomCSS.textMiddleVs}>VS</h1>
                    </div>
                    <div>
                        <h1 className={RoomCSS.playerName}>Player 2</h1>
                        <div className={RoomCSS.gameOptions}>
                            <div className={RoomCSS.rpsOptions}>
                                <img src={Scissor} alt='Scissor' />
                            </div>
                            <div className={RoomCSS.rpsOptions}>
                                <img src={Rock} alt='Rock' />
                            </div>
                            <div className={RoomCSS.rpsOptions}>
                                <img src={Paper} alt='Paper' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
