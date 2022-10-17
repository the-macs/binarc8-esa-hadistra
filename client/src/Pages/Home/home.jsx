import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../Components/Navbar/navbar'
import { FaCaretDown } from 'react-icons/fa'
import HomeCSS from './home.module.scss'

export default function Home() {
    useEffect(() => {
        document.title = 'Home';
    })
    return (
        <>
            <Navbar />
            <section className={HomeCSS.gameHeader}>
                <div className={HomeCSS.headerText}>
                    <div className={HomeCSS.headerTitle}>
                        <h1>Play Traditional Game</h1>
                    </div>
                    <div className={HomeCSS.headerSubtitle}>
                        <h3>Experience new traditional game play</h3>
                    </div>
                    <div className={HomeCSS.headerButton}>
                        <Link className={`${HomeCSS.gradationAnimation} ${HomeCSS.btnPlayNow}`} to="/lobby">To Lobby</Link>
                    </div>
                </div>
                <a href="#game-choice">
                    <div className={`${HomeCSS.headerCaret} ${HomeCSS.bounceAnimation}`}>
                        <p> THE STORY<br /><FaCaretDown /></p>
                    </div>
                </a>
            </section>
            <section className={HomeCSS.gameFeature} id='game-choice'>
                <div className={`${HomeCSS.rowColumn} ${HomeCSS.offsetMd50}`}>
                    <div>&nbsp;</div>
                    <div>
                        <h2 className={HomeCSS.h2}>What's so special ?</h2>
                        <h1 className={`${HomeCSS.display2} ${HomeCSS.m0}`}>FEATURES</h1>
                        <h1 className={`${HomeCSS.h1} ${HomeCSS.textWarning}`}><li>TRADITIONAL GAMES</li></h1>
                        <h4 className={HomeCSS.h4}>If you miss your childhood, we provide many traditional games here</h4>
                        {/* <div className={HomeCSS.rowFlex}>
                            <div>
                                <img src={Ellipse} alt="" />
                            </div>
                            <div>
                                <h1 className={`${HomeCSS.h1} ${HomeCSS.textWarning} ${HomeCSS.m0}`}>TRADITIONAL GAMES</h1>
                                <p style={{ color: 'white' }}>If you miss your childhood, we provide many traditional games here</p>

                            </div>
                        </div> */}
                        <h1 className={`${HomeCSS.h1} ${HomeCSS.textWarning}`}><li>GAME SUIT</li></h1>
                        <h1 className={`${HomeCSS.h1} ${HomeCSS.textWarning}`}><li>TBD</li></h1>

                        {/* </div> */}
                    </div>
                    <div>&nbsp;</div>
                </div>
            </section>
        </>
    )
}
