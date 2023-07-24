import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './styles/LoginHeader.module.css'

const Header = () => {

    return (
        <div className={`row col-sm-12 col-md-12 col-lg-12 col-xl-12 bg-white ${styles.header}`}>
            <h2 className={`${styles.logo}`}>Celfic</h2>
            <div className={`${styles.menuDiv}`}>
                <NavLink to='/signup'
                    className={({ isActive }) => isActive ? styles.active : styles.link}
                    end
                >Sign Up</NavLink>
                <NavLink to='/login'
                    className={({ isActive }) => isActive ? styles.active : styles.link}
                    end
                >Log In</NavLink>
            </div>
        </div>
    )
}

export default Header
