import React, { useEffect } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

import styles from './styles/Header.module.css'


const Header = () => {

    const navigate = useNavigate()
    const username = localStorage.getItem('username')

    const logoutHandler = () => {
        localStorage.removeItem('login')
        localStorage.removeItem('username')
        navigate('/login')
    }
    useEffect(() => {
        const loginStatus = localStorage.getItem('login')
        loginStatus !== '1' && navigate('/login')
    })

    return (
        <div className={`row col-sm-12 col-md-12 col-lg-12 col-xl-12 bg-white ${styles.header}`}>
            <h2 className={`${styles.logo}`}>Celfic</h2>

            <div className={`${styles.menuDiv}`}>
                <NavLink to={`/profile/${username}`} end className={({ isActive }) => isActive ? styles.activeLink : styles.link}>
                    <i className={`bi bi-person`} style={{ fontSize: 27 }}></i>
                </NavLink>
                <NavLink to='/home' end className={({ isActive }) => isActive ? styles.activeLink : styles.link}>
                    <i className={`bi bi-house`} style={{ fontSize: 25 }}></i>
                </NavLink>
                <NavLink to='/globe' end className={({ isActive }) => isActive ? styles.activeLink : styles.link}>
                    <i className={`bi bi-globe2`} style={{ fontSize: 25 }}></i>
                </NavLink>
                <NavLink to='/notifications' end className={({ isActive }) => isActive ? styles.activeLink : styles.link}>
                    <i className={`bi bi-bell`} style={{ fontSize: 25 }}></i>
                </NavLink>
                <NavLink to='/chat' end className={({ isActive }) => isActive ? styles.activeLink : styles.link}>
                    <i className={`bi bi-chat-left`} style={{ fontSize: 25 }}></i>
                </NavLink>
                {/* <a href='/setting' className={`${styles.link}`}><i className={`bi bi-gear`} style={{ fontSize: 25 }}></i></a> */}
                {/* <a href='/logout' className={`${styles.link}`}><i className={`bi bi-box-arrow-right`} style={{fontSize: 25}}></i></a> */}
            </div>

            {/* SETTINGS */}
            <div className={`btn-group p-0 ${styles.userr}`} style={{height: '100%'}}>
                <button type="button" className={`${styles.userTabBtn}`} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className={`bi bi-person mr-2 mt-1`} style={{ fontSize: 28, color:'red' }}></i> {username}
                </button>
                <div className={`dropdown-menu`}>
                    <Link className={`dropdown-item`} to="/settings">Settings</Link>
                    {/* <a className={`dropdown-item`} href="#">Something else here</a> */}
                    <div className={`dropdown-divider`}></div>
                    <a className={`dropdown-item`}>
                        <button onClick={logoutHandler} style={{ border: 'none', backgroundColor: 'transparent', marginLeft: -7 }}>
                            Logout <i className={`bi bi-lock-fill`} style={{ fontSize: 15 }}></i>
                        </button>
                    </a>
                </div>
            </div>

            {/* MENU */}
            <div className={`btn-group p-0 ${styles.menuee}`} style={{ height: '100%' }}>
                <button type="button" className={`${styles.userTabBtn}`} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className={`bi bi-list`} style={{ fontSize: 29 }}></i>
                </button>
                <div className={`dropdown-menu`}>
                    <Link className={`dropdown-item`} to="/settings">Settings</Link>
                    {/* <a className={`dropdown-item`} href="#">Something else here</a> */}
                    <div className={`dropdown-divider`}></div>
                    <a className={`dropdown-item`}>
                        <button onClick={logoutHandler} style={{ border: 'none', backgroundColor: 'transparent', marginLeft: -7 }}>
                            Logout <i className={`bi bi-lock-fill`} style={{ fontSize: 15 }}></i>
                        </button>
                    </a>
                </div>
            </div>

        </div>
    )
}

export default Header
