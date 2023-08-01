import React, { useState } from 'react'
import styles from './styles/Notifications.module.css'

const Notifications = () => {

    const [activeTab, setActiveTab] = useState('all')
    const NotifiData = [
        {
            id: 1,
            userPhoto: `https://cdn.britannica.com/92/215392-050-96A4BC1D/Australian-actor-Chris-Hemsworth-2019.jpg`,
            username: `asadMumtaz92`,
            content: `like your post`,
            dateTime: `${new Date()}`,
            notifiContent: `https://cdn.pixabay.com/photo/2020/02/28/05/23/aesthetic-4886533_960_720.jpg`,
            isSeen: false
        },
        {
            id: 2,
            // userPhoto: `https://cdn.britannica.com/92/215392-050-96A4BC1D/Australian-actor-Chris-Hemsworth-2019.jpg`,
            username: `sh4mii`,
            content: `comments on your post`,
            dateTime: `${new Date()}`,
            notifiContent: `https://images.unsplash.com/photo-1561829252-dfd5dbaedcf3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZsb3dlcnMlMjBuYXR1cmV8ZW58MHx8MHx8fDA%3D&w=1000&q=80`,
            isSeen: true
        },
        {
            id: 3,
            userPhoto: `https://cdn.britannica.com/92/215392-050-96A4BC1D/Australian-actor-Chris-Hemsworth-2019.jpg`,
            username: `malick`,
            content: `add new post`,
            dateTime: `${new Date()}`,
            notifiContent: `https://www.theroadtripexpert.com/wp-content/uploads/2022/02/flower-captions-for-instagram.png`,
            isSeen: false
        },
        {
            id: 3,
            userPhoto: `https://wallpapercave.com/wp/6FB0mg6.jpg`,
            username: `asadMumtaz92`,
            content: `update his profile pohto`,
            dateTime: `${new Date()}`,
            notifiContent: `https://wallpapercave.com/wp/6FB0mg6.jpg`,
            isSeen: false
        }
    ]

    const NotificationItem = (item) => {
        const data = item?.item
        return (
            <button
                onClick={() => { alert(data?.username + ' ' + data?.content) }}
                className={`col-sm-12 col-md-12 col-lg-12 col-xl-12 p-2 mb-3 rounded ${styles.notifiBtn}`}
            >
                <div className={`mr-2 ${styles.indicator}`} style={{ backgroundColor: data?.isSeen ? 'lightgray' : 'red' }} />
                <img className={`${styles.uPhoto}`} src={`${data?.userPhoto ? data?.userPhoto : `https://srcwap.com/wp-content/uploads/2022/08/no-avatar.webp`}`} alt='user profile icon' />
                <p className={`m-0 text-small text-left mr-2 ml-2 ${styles.notiDetail}`}>
                    <b className={`text-capitalize`}>{data?.username}</b> {data?.content}<br/>
                    <span style={{ fontSize: 13 }}>{(data?.dateTime).substring(4, 21)}</span>
                </p>
                {data?.notifiContent && <img src={`${data?.notifiContent}`} className={`rounded ${styles.notiMedia}`} alt='user profile icon' />}
            </button>
        )
    }


    return (
        <div className={`container-fluid`}>
            <div className={`row justify-content-center p-2`}>
                <div className={`col-sm-9 col-md-7 col-lg-6 col-xl-5 p-1`}>

                    {/* HEADER TITLE */}
                    <div className={`p-0 pb-2 mb-3 col-sm-12 col-md-12 col-lg-12 col-xl-12 ${styles.head}`}>
                        <h4 style={{flex:1,margin:0, fontWeight:600}}>Notifications</h4>
                        
                        <button onClick={() => setActiveTab('all')} className={`${styles.btn} rounded ${activeTab === 'all' && styles.active}`}>All</button>
                        <button onClick={()=>setActiveTab('unread')} className={`${styles.btn} rounded ml-1 ${activeTab === 'unread' && styles.active}`}>Unread</button>
                    </div>
                    {/* NITIFICATION ITEMS */}
                    {NotifiData.map(item => {
                        if (activeTab === 'unread') {
                            return !item?.isSeen && <NotificationItem item={item} />
                        }
                        else {
                            return <NotificationItem item={item} />
                        }
                    })}
                </div>
            </div>
        </div>
    )
}

export default Notifications
