import React from 'react'
import styles from './styles/HomeHeader.module.css'


const Header = () => {

    const activeScreen = 'home'

    return (
        <div className={`row col-sm-12 col-md-12 col-lg-12 col-xl-12 bg-white ${styles.header}`}>
            <h2 className={`${styles.logo}`}>Celfic</h2>

            <div className={`${styles.menuDiv}`}>
                <a href='/profile' className={`${styles.link}`} style={activeScreen == 'home' && {borderBottom:'2px solid'}} ><i class="bi bi-person" style={{ fontSize: 25 }}></i></a>
                <a href='/home' className={`${styles.link}`}><i class="bi bi-house" style={{ fontSize: 25 }}></i></a>
                <a href='/globle' className={`${styles.link}`}><i class="bi bi-globe2" style={{ fontSize: 25 }}></i></a>
                <a href='/notifi' className={`${styles.link}`}><i class="bi bi-bell" style={{ fontSize: 25 }}></i></a>
                <a href='/chat' className={`${styles.link}`}><i class="bi bi-chat-left" style={{ fontSize: 25 }}></i></a>
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
