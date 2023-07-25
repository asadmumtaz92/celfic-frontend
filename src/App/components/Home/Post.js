import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import styles from './styles/Post.module.css'


const Post = ({ data, modalDataHandler }) => {
    
    const [comment, setComment] = useState('')
    const [like, setLike] = useState(false)
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
                    ? <img src={data?.userPhoto} className={`${styles.userPhoto}`} alt='User profile...' />
                    : <p className={`${styles.userPhotoAlt}`}>{data?.username.substr(0, 2)}</p>
                }
                {/* NAME/DATE/TIME */}
                <div className={`${styles.postDetail}`}>
                    {/* NAME */}
                    <h6 className={`m-0 mt-1 font-weight-bold`}>
                        <Link to={`/profile/${data?.username}`} className={`text-dark`}>
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
                    <div class="btn-group">
                        <button type="button" className={`${styles.menuIconButton}`} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="bi bi-three-dots-vertical" style={{ fontSize: 20 }}></i>
                        </button>
                        <div class="dropdown-menu">
                            <Link class="dropdown-item" to={`/post/${data?.id}/edit`}>Edit</Link>
                            <Link class="dropdown-item" to={`/post/${data?.id}/report`}>Report</Link>
                            <div class="dropdown-divider"></div>
                            <Link class="dropdown-item" to={`/post/${data?.id}/delete`}>Delete</Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* POST DESCRIPTION/MEDIA */}
            <div className="mt-1">
                {data?.description && <p className={`m-1 pb-1`}>{data?.description}</p>}
                {data?.postMedia &&
                    <button
                        onClick={() => { modalDataHandler(data) }}
                        type='submit'
                        data-toggle="modal" data-target="#postDetailModal"
                        className={`p-0 ${styles.menuIconButton}`}
                    >
                        <img src={data?.postMedia} style={{ width: '100%', borderRadius: 5, flex: 1 }} alt='User profile...' />
                    </button>
                }
            </div>
            {/* POST FOOTER */}
            <div className={`mt-2 ${styles.footerBox}`}>
                {/* LIKES */}
                <div className={`text-left ${styles.footerItem}`}>
                    <button onClick={() => setLike(!like)} className={`${styles.menuIconButton}`}>
                        <i className={`bi ${like ? 'bi-heart-fill' : 'bi-heart'} mr-2`} style={{ fontSize: 20 }}></i>
                    </button>
                    {data?.likes && (like ? data?.likes + 1 : data?.likes)}
                </div>
                {/* COMMENTS */}
                <div className={`text-center ${styles.footerItem}`}>
                    <button
                        onClick={() => { modalDataHandler(data) }}
                        data-toggle="modal" data-target="#postDetailModal"
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
            <p className={`m-0 p-1`}>
                {data?.likes && (like ? `You, ${data?.username} and ${data?.likes-1} other` : `${data?.username} and ${data?.likes-1} other`)}
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
                {comment && <button onClick={sendCommentHandler} className={`${styles.menuIconButton} text-uppercase ml-2 font-weight-bold`}>
                    <span className={``}>{comment && 'Send'}</span>
                </button>}
            </div>
        </div>
    )
}

export default Post
