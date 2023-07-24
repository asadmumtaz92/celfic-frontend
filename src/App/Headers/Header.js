import React,{ useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './styles/HomeHeader.module.css'


const Header = () => {

    const [activeScreen, setActiveScreen] = useState('home')
    const activeScreenHandler = (screen) => {
        setActiveScreen(screen)
    }

    return (
        <div className={`row col-sm-12 col-md-12 col-lg-12 col-xl-12 bg-white ${styles.header}`}>
            <h2 className={`${styles.logo}`}>Celfic</h2>

            <div className={`${styles.menuDiv}`}>
                <Link to='/profile' className={`${styles.link}`}>
                    <i class="bi bi-person" style={{ fontSize: 25 }}></i>
                </Link>
                <Link to='/home' className={`${styles.link}`} style={{ fontSize: 25, borderBottom: activeScreen == 'home' ? '3px solid' :'none' }}>
                    <i class="bi bi-house" style={{ fontSize: 25 }}></i>
                </Link>
                <Link to='/globle' className={`${styles.link}`}>
                    <i class="bi bi-globe2" style={{ fontSize: 25 }}></i>
                </Link>
                <Link to='/notifi' className={`${styles.link}`}>
                    <i class="bi bi-bell" style={{ fontSize: 25 }}></i>
                </Link>
                <Link to='/chat' className={`${styles.link}`}>
                    <i class="bi bi-chat-left" style={{ fontSize: 25 }}></i>
                </Link>
                {/* <a href='/setting' className={`${styles.link}`}><i class="bi bi-gear" style={{ fontSize: 25 }}></i></a> */}
                {/* <a href='/logout' className={`${styles.link}`}><i class="bi bi-box-arrow-right" style={{fontSize: 25}}></i></a> */}
            </div>
            <button onClick={() => { alert('Show setting modal') }} className={`${styles.userTabBtn}`}>
                <i class="bi bi-person mr-2" style={{ fontSize: 25 }}></i> Asad
            </button>
        </div>
    )
}

export default Header
