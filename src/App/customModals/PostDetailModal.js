import React from 'react'
import ReactDOM from 'react-dom'

import styles from './styles/PostDetailModal.module.css'


const PostDetailModal = ({ data }) => {

    const MyModal = () => {
        return (
            <div className={`modal fade ${styles.modaal}`} id="postDetailModal">
                <div className={`modal-dialog row p-0 ${styles.w100}`}>
                    <div className={`modal-content`}>

                        {/* <!-- Modal body --> */}
                        <div className={`modal-body ${styles.mBody}`}>
                            <div className={`row m-0`}>
                                {/* LEFT SIDE */}
                                <div className={`col-sm-11 col-md-12 col-lg-8 col-xl-8 p-0 pr-3 ${styles.leftView}`}>
                                    <img src={data?.postMedia} style={{ height: '100%', width: '100%' }} className={`rounded`} alt='user profile...' />
                                </div>

                                {/* RIGHT SIDE DATA */}
                                <div className={`col-sm-11 col-md-12 col-lg-4 col-xl-4 mt-2 ${styles.rightView}`}>
                                    {/* USER DETAIL */}
                                    <div className={`pb-2 ${styles.postHeader}`}>
                                        {data?.userPhoto
                                            ? < img
                                                src={data?.userPhoto}
                                                className={`${styles.userPhoto}`}
                                                alt='User profile...'
                                            />
                                            : <p className={`${styles.userPhotoAlt}`}>{data?.username && data?.username.substr(0, 2)}</p>
                                        }
                                        {/* NAME/DATE/TIME */}
                                        <div className={`${styles.postDetail}`}>
                                            {/* NAME */}
                                            <h6 className={`text-uppercase m-0 mt-1 font-weight-bold`}>
                                                {/* <Link to={`/profile/${data?.username}`} className={`text-dark`}> */}
                                                    {data?.username}
                                                {/* </Link> */}
                                            </h6>
                                            <p className={`m-0`} style={{ fontSize: 12 }}>
                                                {data?.dateTime}
                                                <span className={`ml-2`}>
                                                    {data?.visibility === 'public'
                                                        ? <i className="bi bi-globe2" style={{ fontSize: 15 }}></i>
                                                        : data?.visibility === 'onlyme'
                                                            ? <i className="bi bi-person-fill-lock" style={{ fontSize: 15 }}></i>
                                                            : <i className="bi bi-people-fill" style={{ fontSize: 15 }}></i>}
                                                </span>
                                            </p>
                                        </div>
                                        {/* MENU ICON */}
                                        <div className={`${styles.menuBox}`}>
                                            <button onClick={() => { alert('Show post settings modal') }} className={`${styles.menuIconButton}`}>
                                                <i className="bi bi-three-dots-vertical" style={{ fontSize: 20 }}></i>
                                            </button>
                                        </div>
                                    </div>

                                    {/* <p><strong>Width : </strong>
                                        {data?.postMedia.offsetHeight}px</p> */}

                                    <div style={{flex:1}}>
                                        {/* POST DESCRIPTION */}
                                        <div className="mt-2 pl-1">
                                            {data?.description && <p className={`m-1 pb-1`}>{data?.description}</p>}
                                        </div>

                                        <div className={`mt-2 bg-white ${styles.footerBox}`}>
                                            {/* LIKES */}
                                            <div className={`text-left ${styles.footerItem}`}>
                                                <button onClick={() => { alert('You liked post') }} className={`${styles.menuIconButton}`}>
                                                    <i className="bi bi-heart mr-2" style={{ fontSize: 20 }}></i>
                                                </button>
                                                {data?.likes && data?.likes}
                                            </div>
                                            {/* COMMENTS */}
                                            <div className={`text-center ${styles.footerItem}`}>
                                                <button
                                                    // onClick={() => { alert('Open post modal') }}
                                                    // data-toggle="modal" data-target="#postDetailModal"
                                                    className={`${styles.menuIconButton}`}
                                                >
                                                    <i className="bi bi-chat mr-2" style={{ fontSize: 20 }}></i>
                                                </button>
                                                {data?.comments && data?.comments}
                                            </div>
                                            {/* SHARE */}
                                            <div className={`text-center ${styles.footerItem}`}>
                                                <button onClick={() => { alert('Open modal for share post') }} className={`${styles.menuIconButton}`}>
                                                    <i className="bi bi-recycle mr-2" style={{ fontSize: 20 }}></i>
                                                </button>
                                                {data?.comments && data?.comments}
                                            </div>
                                        </div>
                                        <p className={`m-0 p-1 pl-2`}>
                                            {data?.likes && `You and ${data?.likes - 1} other`}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }

    return (
        <React.Fragment>
            {ReactDOM.createPortal(
                <MyModal />,
                document.getElementById('postDetailModal-root')
            )}
        </React.Fragment>
    )
}

export default PostDetailModal
