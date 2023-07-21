import styles from './styles/ImagesBox.module.css'

const ImagesBox = (props) => {

    return (
        <div className={`col-sm-12 col-md-7 col-lg-7 col-xl-7 mt-2 p-4 rounded`}>
            <h3 className={`text-center`}>Tranding Tags</h3>
            <div className={`row justify-content-center`}>
                <div className={`col-sm-11 col-md-12 col-lg-11 col-xl-9 mt-3 rounded ${styles.leftDiv}`}>
                    {props?.images.map((item, index) => {
                        return (
                            <div key={index} className={`col mb-3 ${styles.item}`}>
                                <img className={`${styles.image}`} src={item} alt='trending tag img' />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default ImagesBox
