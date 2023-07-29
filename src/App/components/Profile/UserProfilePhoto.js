import styles from './styles/UserProfilePhoto.module.css'

const UserProfilePhoto = ({ userInfo }) => {

    const male = "https://srcwap.com/wp-content/uploads/2022/08/no-avatar.webp"
    const femaleIcon = "https://media.istockphoto.com/id/1273297923/vector/default-avatar-profile-icon-grey-photo-placeholder-hand-drawn-modern-woman-avatar-profile.jpg?s=170667a&w=0&k=20&c=GesW_bJUpMCbPQl_avyC1d8nlWZQA-48AflxAL-D6zE="

    return (
        <div className={`${styles.userInfo}`}>
            <div className={`${styles.imageDiv}`}>
                {userInfo?.image
                    ? <img src={userInfo?.image} className={`${styles.image}`} alt='User profile...' />
                    : <img src={`${userInfo?.gender === 'male' ? male : femaleIcon}`} className={`${styles.image}`} alt='User profile...' />
                }
            </div>

            {/* USERNAME */}
            <div className={`mt-3 ${styles.usernameDiv}`}>
                <h4 className={``}>@{userInfo?.username}</h4>
                {userInfo?.verify && <i className={`bi bi-patch-check-fill ml-1 ${styles.verifyTic}`}></i>}
            </div>

            {/* FULL NAME */}
            <h3 className={`text-capitalize mt-2`}>{userInfo?.fullname}</h3>

            {/* EDIT / FOLLOW */}
            <div className={`mt-4`}>
                {userInfo?.isOnwer
                    ? <button type='submit' className={`${styles.followBtn} rounded`}> EDIT </button>
                    : <button type='submit' className={`${styles.followBtn} rounded`}> {userInfo?.isFollow ? 'FOLLOWINg' : 'FOLLOW'} </button>
                }
            </div>
        </div>
    )
}

export default UserProfilePhoto
