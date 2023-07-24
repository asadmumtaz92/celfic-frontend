import React from 'react'
import { Link } from 'react-router-dom'
import styles from './styles/LoginHeader.module.css'

const Header = () => {

    return (
        <div className={`row col-sm-12 col-md-12 col-lg-12 col-xl-12 bg-white ${styles.header}`}>
            <h2 className={`${styles.logo}`}>Celfic</h2>
            <div className={`${styles.menuDiv}`}>
                <Link to='/signup' className={`${styles.link}`}>Sign Up</Link>
                <Link to='/login' className={`${styles.link}`}>Log In</Link>
            </div>
        </div>
    )
}

export default Header
