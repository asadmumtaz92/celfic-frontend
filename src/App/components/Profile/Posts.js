import React, { useState } from 'react'
import styles from './styles/Posts.module.css'


const Posts = ({ Posts }) => {

    const [activeTab, setActiveTab] = useState('photo')

    const activeTabHandler = (tab) => {
        setActiveTab(tab)
    }

    const Tabs = () => {
        return (
            <div className={`row justify-content-center col-sm-12 col-md-12 bg-dark m-0 col-lg-12 col-xl-12 mb-3 rounded`}>
                <button className={`${styles.tabBtn} ${activeTab === 'photo' && styles.active}`} type='submit' onClick={() => activeTabHandler('photo')}>
                    Photos
                </button>
                <button className={`${styles.tabBtn} ${activeTab=== 'reel' && styles.active}`} type='submit' onClick={() => activeTabHandler('reel')}>
                    Reels
                </button>
                <button className={`${styles.tabBtn} ${activeTab=== 'challange' && styles.active}`} type='submit' onClick={() => activeTabHandler('challange')}>
                    Challanges
                </button>
            </div>
        )
    }

    const PostItem = (item) => {
        const data = item?.item
        if (data?.type === activeTab) {
            return (
                <div className={`col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-3 p-0 rounded justify-content-center`}>
                    <div className={`col-sm-11 col-md-11 col-lg-11 col-xl-11 mb-3 p-0 rounded ${styles.post}`}>
                        <img src={data?.postMedia} alt='' className={`${styles.postMedia}`} />
                        <div className={`row m-0 mt-2 mb-1`}>
                            <div className={`col text-center`}><i className={`bi bi-heart mr-1`} style={{ fontSize: 16 }}></i>{data?.likes}</div>
                            <div className={`col text-center`}><i className={`bi bi-chat mr-1`} style={{ fontSize: 16 }}></i>{data?.comments}</div>
                            <div className={`col text-center`}><i className={`bi bi-recycle mr-1`} style={{ fontSize: 16 }}></i>{data?.share}</div>
                        </div>
                    </div>
                </div>
            )
        }
    }

    return (
        <>
            <Tabs />
            {Posts.map(item => { return <PostItem item={item} /> })}
        </>
    )
}

export default Posts
