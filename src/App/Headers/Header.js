import React,{ useState } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './styles/Header.module.css'


const Header = () => {

    const [activeScreen, setActiveScreen] = useState('home')
    const activeScreenHandler = (screen) => {
        setActiveScreen(screen)
    }

    return (
        <div className={`row col-sm-12 col-md-12 col-lg-12 col-xl-12 bg-white ${styles.header}`}>
            <h2 className={`${styles.logo}`}>Celfic</h2>

            <div className={`${styles.menuDiv}`}>
                <NavLink to='/profile'
                    className={({ isActive }) => isActive ? styles.activeLink : styles.link}
                    end
                >
                    <i class="bi bi-person" style={{ fontSize: 25 }}></i>
                </NavLink>
                <NavLink to='/home'
                    className={({ isActive }) => isActive ? styles.activeLink : styles.link}
                    end
                >
                    <i class="bi bi-house" style={{ fontSize: 25 }}></i>
                </NavLink>
                <NavLink to='/globe'
                    className={({ isActive }) => isActive ? styles.activeLink : styles.link}
                    en
                >
                    <i class="bi bi-globe2" style={{ fontSize: 25 }}></i>
                </NavLink>
                <NavLink to='/notifications'
                    className={({ isActive }) => isActive ? styles.activeLink : styles.link}
                    end
                >
                    <i class="bi bi-bell" style={{ fontSize: 25 }}></i>
                </NavLink>
                <NavLink to='/chat'
                    className={({ isActive }) => isActive ? styles.activeLink : styles.link}
                    end
                >
                    <i class="bi bi-chat-left" style={{ fontSize: 25 }}></i>
                </NavLink>
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
