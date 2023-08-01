import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './styles/Chat.module.css'

const UserChatList = [
    {
        id: 1,
        userPhoto: `https://cdn.britannica.com/92/215392-050-96A4BC1D/Australian-actor-Chris-Hemsworth-2019.jpg`,
        username: `asadMumtaz92`,
        lastMessage: `like your post`,
        dateTime: `${new Date()}`,
        isSeen: false,
        isOnline: true,
    },
    {
        id: 2,
        userPhoto: `https://images.unsplash.com/photo-1561829252-dfd5dbaedcf3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZsb3dlcnMlMjBuYXR1cmV8ZW58MHx8MHx8fDA%3D&w=1000&q=80`,
        username: `sh4mii`,
        lastMessage: `comments on your post`,
        dateTime: `${new Date()}`,
        isSeen: true,
        isOnline: true,
    },
    {
        id: 3,
        // userPhoto: `https://cdn.britannica.com/92/215392-050-96A4BC1D/Australian-actor-Chris-Hemsworth-2019.jpg`,
        username: `malick`,
        lastMessage: `add new post`,
        dateTime: `${new Date()}`,
        isSeen: false,
        isOnline: false,
    },
]


const Chat = () => {

    const userIcon = `https://srcwap.com/wp-content/uploads/2022/08/no-avatar.webp`
    const [activeUser, setActiveUser] = useState(null)
    const [search, setSearch] = useState('')
    const [filteredData, setFilteredData] = useState(UserChatList)
    const [message, setMessage] = useState('')
    const [sendedMessage, setSendedMessage] = useState([])

    const activeUserHandler = (item) => {
        setActiveUser(item)
    }
    const searchHandler = (event) => {
        let text = event?.target?.value

        setSearch(text)
        const result = UserChatList.filter(item => item?.username.toLowerCase().includes(text.toLowerCase()))
        setFilteredData(result)
    }
    const searchReset = () => {
        setSearch('')
        setActiveUser(null)
        setFilteredData(UserChatList)
    }
    const messageHandler = (event) => {
        let text = event?.target?.value
        setMessage(text)
    }
    const sendMessage = (event) => {
        event.preventDefault()
        if (message.length < 1) {
            return
        }

        let newMessage = {
            id: sendedMessage?.length,
            message: message,
        }
        let newArray = [newMessage, ...sendedMessage]
        setSendedMessage(newArray)
        setMessage('')
    }
    const deleteChat = () => {
        setSendedMessage([])
        setActiveUser(null)
        setMessage('')
    }

    const ChatItem = (item) => {
        const data = item?.item
        return (
            <button
                onClick={() => { activeUserHandler(data) }}
                 title={(data?.username).toUpperCase()}
                className={`col-sm-12 col-md-12 col-lg-12 col-xl-12 p-2 mb-2 pl-3 ${styles.chatBtnItem}`}
            >
                <div className={`mr-2 ${styles.indicator}`} style={{ backgroundColor: data?.isSeen ? 'lightgray' : 'red' }} />
                <img
                    className={`${styles.uPhoto}`}
                    src={`${data?.userPhoto ? data?.userPhoto : userIcon}`}
                    alt='user profile icon'
                    style={{ borderColor: data?.isOnline ? 'green' : '#000000'}}
                />
                <div className={`pl-3 ${styles.chatDetail}`}>
                    <p className={`p-0 m-0 font-weight-bold`}>{data?.username}</p>
                    <p className={`m-0 ${styles.sMsg}`}>{data?.lastMessage}</p>
                </div>
            </button>
        )
    }

    const MessageList = () => {
        return (
            <div className={`${styles.topView}`}>
                {/* HEADER */}
                <div className={` text-white p-2 ${styles.msgHeader}`}>
                    <img src={activeUser?.userPhoto ? activeUser?.userPhoto : userIcon} className={`${styles.userPhoto}`} />
                    <div className={`ml-3 ${styles.headerUserDetail}`}>
                        <h4 className={`m-0 text-capitalize`}>
                            <Link className={`text-white`} to={`/profile/${activeUser?.username}`}>
                                {activeUser?.username}
                            </Link>
                        </h4>
                        <p className={`m-0`}>{activeUser?.isOnline ? 'Online' : 'Offline'}</p>
                    </div>
                    <div className={`ml-3 ${styles.headerMenu}`}>
                        <button
                            onClick={() => { alert('Call functionality implement in future!') }}
                            className={`m-0 pl-2 pr-2 ${styles.menuBtn}`}
                        >
                            <i className="bi bi-telephone" style={{ fontSize: 23 }}></i>
                        </button>
                        {/* DROPDOWN MENU */}
                        <div className={`btn-group ml-3 p-0`}>
                            <button type="button" className={`p-0 ${styles.menuBtn}`} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="bi bi-three-dots-vertical" style={{ fontSize: 23 }}></i>
                            </button>
                            <div className={`dropdown-menu`}>
                                <button style={{ borderBottom: '0.6px solid #ced4da' }} className={`dropdown-item ${styles.ddItem}`} onClick={() => { setActiveUser(null) }}>Close Chat</button>
                                <button style={{ borderBottom: '0.6px solid #ced4da' }} className={`dropdown-item ${styles.ddItem}`} onClick={deleteChat}>Delete Chat</button>
                                <button style={{ borderBottom: '0.6px solid #ced4da' }} className={`dropdown-item ${styles.ddItem}`}>Report</button>
                                <button className={`dropdown-item ${styles.ddItem}`}>Block</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* MESSAGES LIST */}
                <div className={`m-0 p-0 pl-3 pr-3 ${styles.messageList}`}>
                    {sendedMessage.map(item => {
                        return (
                            <div key={item?.id} className={`p-2 mb-2 ${styles.msgBox} ${item?.id % 2 == 0 && styles.receiverMsg}`}>
                                <p className={`m-0 p-1`}>{item?.message}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
    const MessageMediaArea = () => {
        return (
            <div className={`col-sm-12 col-md-5 col-lg-4 col-xl-5 p-0`} style={{ borderLeft: '0.6px solid #ced4da' }}>
                <h3 className={`text-center m-0 p-0 mt-0`}>Message Media</h3>
                <hr className={`mt-1`} />
            </div>
        )
    }


    return (
        <div className={`container-fluid`}>
            <div className={`row`} style={{ height: '93vh'}}>
                {/* CHAT LIST */}
                <div className={`col-sm-2 col-md-4 col-lg-4 col-xl-3 m-0 p-0 pt-1 ${styles.chatList}`}>
                    {/* SEARCH */}
                    <div class={`input-group mb-3 pr-3 pl-3 ${styles.searchView}`}>
                        <input
                            type={'text'}
                            value={search}
                            onChange={searchHandler}
                            placeholder={'Search user...'}
                            className={`form-control ${styles.ip}`}
                        />
                        {search
                            && <div class="input-group-append">
                                <button onClick={searchReset} class="btn" type="submit" style={{ border: '1px solid #ced4da', boxShadow: 'none' }}>
                                    <i className="fa fa fa-close"></i>
                                </button>
                            </div>
                        }
                    </div>
                    {/* CHAT LIST */}
                    {filteredData.map(item => <ChatItem item={item} />)}
                </div>
                {/* CONTENT AREA */}
                {activeUser
                    && <div className={`col-sm-10 col-md-8 col-lg-8 col-xl-9 m-0 p-0`}>
                        <div className={`row p-0 m-0`}>
                            {/* CHAT AREA */}
                            <div className={`col-sm-12 col-md-7 col-lg-8 col-xl-7 p-0 ${styles.messageArea}`}>
                                {/* MESSAGE HEADER & LIST */}
                                <MessageList />
                                {/* WRITE MESSAGE */}
                                <div className={`m-0 p-0 pl-3 pr-2 pb-1 ${styles.rightMsgView}`}>
                                    <form className={`${styles.form}`} onSubmit={sendMessage}>
                                        <div className={`input-group mb-2 mt-0 ${styles.ipView}`}>
                                            <input
                                                type={'text'}
                                                value={message}
                                                onChange={messageHandler}
                                                placeholder={'Write your message...'}
                                                className={`form-control ${styles.ip}`}
                                            />
                                            {message
                                                && < div className="input-group-append">
                                                    <button className="btn" type="submit" style={{ border: '1px solid #ced4da', boxShadow: 'none' }}>
                                                        <i className="fa fa fa-send"></i>
                                                    </button>
                                                </div>
                                            }
                                        </div>
                                    </form>
                                    <button onClick={() => { setMessage(`${message}😍`) }} className={`p-0 pr-1 rounded ${styles.emoji}`}>
                                        <i className="bi bi-emoji-smile" style={{ fontSize: 23 }}></i>
                                    </button>
                                </div>
                            </div>
                            {/* CHAT MEDIA */}
                            <MessageMediaArea />
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default Chat
