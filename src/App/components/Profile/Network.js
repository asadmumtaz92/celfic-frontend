import styles from './styles/Network.module.css'

const Network = ({ myNetwork }) => {


    return (
        <div className={`${styles.myNetwork}`}>
            <div className={`${styles.netowrkItem} rounded`}>
                <button className={``}>{myNetwork?.follower}<br />followers</button>
            </div>
            <div className={`${styles.netowrkItem} rounded`}>
                <button className={``}>{myNetwork?.following}<br />following</button>
            </div>
            <div className={`${styles.netowrkItem} rounded`}>
                <button className={``}>{myNetwork?.popularity}%<br />popularity</button>
            </div>
        </div>
    )
}

export default Network
