import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './styles/Post.module.css'


const Post = ({ data }) => {
    
    const [comment, setComment] = useState('')

    const commentHandler = (event) => {
        setComment(event?.target?.value)
    }
    const sendCommentHandler = () => {
        alert('Comment sent successfully!')
        setComment('')
    }

    return (
        <div className={`rounded mb-4 p-2 pb-1 ${styles.post}`}>
            {/* POST HEADER */}
            <div className={`pb-2 ${styles.postHeader}`}>
                {data?.userPhoto
                    ? < img src={data?.userPhoto} className={`${styles.userPhoto}`} alt='User profile...' />
                    : <p className={`${styles.userPhotoAlt}`}>{data?.username.substr(0, 2)}</p>
                }
                {/* NAME/DATE/TIME */}
                <div className={`${styles.postDetail}`}>
                    {/* NAME */}
                    <h6 className={`text-uppercase m-0 mt-1 font-weight-bold`}>
                        <Link to={`/${data?.username}`} className={`text-dark`}>
                            {data?.username}
                        </Link>
                    </h6>
                    <p className={`m-0`} style={{ fontSize: 13 }}>
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
                    <button onClick={()=>{alert('Show post settings modal')}} className={`${styles.menuIconButton}`}>
                        <i className="bi bi-three-dots-vertical" style={{fontSize: 20}}></i>
                    </button>
                </div>
            </div>
            {/* POST DESCRIPTION/MEDIA */}
            <div className="mt-1">
                {data?.description && <p className={`m-1 pb-1`}>{data?.description}</p>}
                {data?.postMedia && <img src={data?.postMedia} style={{ width: '100%', borderRadius: 5, flex: 1 }} alt='User profile...' />}
            </div>
            {/* POST FOOTER */}
            <div className={`mt-2 ${styles.footerBox}`}>
                <div className={`text-left ${styles.footerItem}`}>
                    <button onClick={() => { alert('You liked post') }} className={`${styles.menuIconButton}`}>
                        <i className="bi bi-heart mr-2" style={{ fontSize: 20 }}></i>
                    </button>
                    {data?.likes && data?.likes}
                </div>
                <div className={`text-center ${styles.footerItem}`}>
                    <button onClick={() => { alert('Open post modal') }} className={`${styles.menuIconButton}`}>
                        <i className="bi bi-chat mr-2" style={{ fontSize: 20 }}></i>
                    </button>
                    {data?.comments && data?.comments}
                </div>
                <div className={`text-center ${styles.footerItem}`}>
                    <button onClick={() => { alert('Open modal for share post') }} className={`${styles.menuIconButton}`}>
                        <i className="bi bi-recycle mr-2" style={{ fontSize: 20 }}></i>
                    </button>
                    {data?.comments && data?.comments}
                </div>
            </div>
            <p className={`m-0 p-1`}>
                {data?.likes && `You and ${data?.likes - 1} other`}
            </p>

            <div className={`form-group mb-1 ${styles.commentBox}`}>
                <textarea
                    type='text'
                    value={comment}
                    onChange={commentHandler}
                    placeholder='Write your comment...'
                    style={{height: comment.length > 40 ? 80 : 40,}}
                    className={`form-control mr-0 ml-0 pl-1 pr-0 ${styles.textarea}`}
                ></textarea>
                {comment && <button onClick={sendCommentHandler} className={`${styles.menuIconButton}`}>
                    <span className={` ml-1 pr-1`}>{comment && 'Send'}</span>
                </button>}
            </div>
        </div>
    )
}

export default Post
