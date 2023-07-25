import React from 'react'
import styles from './styles/SharePost.module.css'
import ReactDOM from 'react-dom'

const SharePostModal = ({ data, value, addUserHandler, ...props }) => {

    const UserList = (item) => {
        let itemDetail = item?.item

        return (
            <div className={`pr-2 pb-2 ${styles.userListItem}`}>
                <img src={'https://cdn2.excelsior.com.mx/media/styles/image800x600/public/pictures/2021/06/02/2588537.jpg'} alt='User profile...' className={`rounded ${styles.image}`} />

                <div className={styles.descBox}>
                    <p className={`text-uppercase`}>{itemDetail?.userInfo?.name}</p>
                    <button type='submit' className={`${styles.chkB}`}
                        // onClick={() => addUserHandler(itemDetail?.userInfo?.name)}
                    >
                        <input type="radio" aria-label="Radio button for following text input" />
                    </button>
                </div>
            </div>
        )
    }

    const MyModal = () => {

        return (
            <div className={`modal fade ${styles.modaal}`} id="postShareModal">
                <div className={`modal-dialog modal-dialog-centered`}>
                    <div className={`modal-content`}>

                        {/* <!-- Modal Header --> */}
                        <div className={`modal-header`}>
                            <h6 className={`modal-title text-center ${styles.modalTitle}`}>Share Post</h6>
                            <button type="button" className={`close`} data-dismiss="modal">&times;</button>
                        </div>

                        {/* <!-- Modal body --> */}
                        <div className={`modal-body pb-0 ${styles.mBody}`}>
                            <div className={`form-group`}>
                                <input
                                    type='text'
                                    // value={value}
                                    // onBlur={searchBlurHandler}
                                    placeholder='Search people'
                                    onChange={(event) => {
                                        console.log('event', event.target?.value)
                                        // searchHandler(event.target?.value)
                                        // props?.searchHandler()
                                    }}
                                    className={`form-control ${styles.ip}`}
                                />
                            </div>
                            {data?.length > 0
                                ? data?.map(item => <UserList item={item} key={item?.id} />)
                                : <h4>No user found</h4>
                            }
                        </div>

                        {/* <!-- Modal footer --> */}
                        <div className={`modal-footer ${styles.ftr}`}>
                            {data?.length > 0
                                && <button type="button" className={`btn btn-secondary`} data-dismiss="modal">
                                    Send
                                </button>
                            }
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
                document.getElementById('sharePostModal-root')
            )}
        </React.Fragment>
    )
}

export default SharePostModal
