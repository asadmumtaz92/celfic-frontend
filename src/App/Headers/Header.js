import React, { useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

import styles from './styles/Header.module.css'


const Header = () => {

    const navigate = useNavigate()
    const username = localStorage.getItem('username')

    const logoutHandler = () => {
        alert('Show setting modal')
        localStorage.removeItem('login')
        localStorage.removeItem('username')
        navigate('/')
    }
    useEffect(() => {
        const loginStatus = localStorage.getItem('login')
        loginStatus !== '1' && navigate('/login')
    })

    return (
        <div className={`row col-sm-12 col-md-12 col-lg-12 col-xl-12 bg-white ${styles.header}`}>
            <h2 className={`${styles.logo}`}>Celfic</h2>

            <div className={`${styles.menuDiv}`}>
                <NavLink to={`/profile/${username}`}
                    className={({ isActive }) => isActive ? styles.activeLink : styles.link}
                    end
                >
                    <i className="bi bi-person" style={{ fontSize: 25 }}></i>
                </NavLink>
                <NavLink to='/home'
                    className={({ isActive }) => isActive ? styles.activeLink : styles.link}
                    end
                >
                    <i className="bi bi-house" style={{ fontSize: 25 }}></i>
                </NavLink>
                <NavLink to='/globe'
                    className={({ isActive }) => isActive ? styles.activeLink : styles.link}
                    en
                >
                    <i className="bi bi-globe2" style={{ fontSize: 25 }}></i>
                </NavLink>
                <NavLink to='/notifications'
                    className={({ isActive }) => isActive ? styles.activeLink : styles.link}
                    end
                >
                    <i className="bi bi-bell" style={{ fontSize: 25 }}></i>
                </NavLink>
                <NavLink to='/chat'
                    className={({ isActive }) => isActive ? styles.activeLink : styles.link}
                    end
                >
                    <i className="bi bi-chat-left" style={{ fontSize: 25 }}></i>
                </NavLink>
                {/* <a href='/setting' className={`${styles.link}`}><i className="bi bi-gear" style={{ fontSize: 25 }}></i></a> */}
                {/* <a href='/logout' className={`${styles.link}`}><i className="bi bi-box-arrow-right" style={{fontSize: 25}}></i></a> */}
            </div>

            <button onClick={logoutHandler} className={`${styles.userTabBtn}`}>
                <i className="bi bi-person mr-2" style={{ fontSize: 25 }}></i> {username}
            </button>
        </div>
    )
}

export default Header
