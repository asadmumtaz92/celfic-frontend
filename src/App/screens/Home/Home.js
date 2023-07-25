import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import styles from './styles/Home.module.css'
import Post from '../../components/Home/Post'
import PostDetailModal from '../../customModals/PostDetailModal'


const Home = () => {

    const [products, setProducts] = useState([])
    const [orders, setOrders] = useState([])
    const [modalData, setModalData] = useState({})
    const Posts = [
        {
            id: 1,
            userPhoto: 'https://cdn.pixabay.com/photo/2020/02/28/05/23/aesthetic-4886533_960_720.jpg',
            username: 'AsadMumtaz92',
            dateTime: '24 Jan 23 at 11:04 PM',
            visibility: 'private',
            description: 'This is my description text about nature.',
            likes: 8,
            comments: 3,
            postMedia: 'https://cdn.pixabay.com/photo/2020/02/28/05/23/aesthetic-4886533_960_720.jpg',
        },
        {
            id: 2,
            userPhoto: '',//'https://images.unsplash.com/photo-1561829252-dfd5dbaedcf3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZsb3dlcnMlMjBuYXR1cmV8ZW58MHx8MHx8fDA%3D&w=1000&q=80',
            username: 'sh4mi',
            dateTime: '2 Jan 23 at 1:34 AM',
            visibility: 'public',
            description: 'This is my description text about nature.',
            likes: 23,
            comments: 18,
            postMedia: 'https://images.unsplash.com/photo-1561829252-dfd5dbaedcf3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZsb3dlcnMlMjBuYXR1cmV8ZW58MHx8MHx8fDA%3D&w=1000&q=80',
        },
        {
            id: 3,
            userPhoto: 'https://pbs.twimg.com/media/FQvbi4qXIAwul1A.jpg',
            username: 'username',
            dateTime: '14 Feb 23 at 02:47 AM',
            visibility: 'public',
            likes: 33,
            comments: 22,
            postMedia: 'https://pbs.twimg.com/media/FQvbi4qXIAwul1A.jpg',
        },
        {
            id: 4,
            userPhoto: 'https://www.theroadtripexpert.com/wp-content/uploads/2022/02/flower-captions-for-instagram.png',
            username: 'username',
            dateTime: '24 may 23 at 12:34 AM',
            visibility: 'onlyme',
            description: 'This is my description text about nature.',
            likes: 23,
            comments: 18,
            postMedia: 'https://www.theroadtripexpert.com/wp-content/uploads/2022/02/flower-captions-for-instagram.png',
        },
        {
            id: 5,
            userPhoto: 'https://www.gravatar.com/avatar/03b704efdab65c446bb6a1f486f1867f?s=64&d=identicon&r=PG',
            username: 'username',
            dateTime: '24 may 23 at 12:34 AM',
            visibility: 'public',
            description: 'This is my description text about nature.',
            likes: 23,
            comments: 18,
            postMedia: 'https://www.gravatar.com/avatar/03b704efdab65c446bb6a1f486f1867f?s=64&d=identicon&r=PG',
        },
        {
            id: 6,
            userPhoto: 'https://cdn.pixabay.com/photo/2020/02/28/05/23/aesthetic-4886533_960_720.jpg',
            username: 'username',
            dateTime: '24 may 23 at 12:34 AM',
            visibility: 'public',
            description: 'This is my description text about nature.',
            likes: 23,
            comments: 18,
            postMedia: 'https://cdn.pixabay.com/photo/2020/02/28/05/23/aesthetic-4886533_960_720.jpg',
        },
        {
            id: 7,
            userPhoto: 'https://cdn.pixabay.com/photo/2020/02/28/05/23/aesthetic-4886533_960_720.jpg',
            username: 'username',
            dateTime: '24 may 23 at 12:34 AM',
            visibility: 'public',
            description: 'This is my description text about nature.',
            likes: 23,
            comments: 18,
            postMedia: 'https://cdn.pixabay.com/photo/2020/02/28/05/23/aesthetic-4886533_960_720.jpg',
        },
        {
            id: 8,
            userPhoto: 'https://pbs.twimg.com/media/FQvbi4qXIAwul1A.jpg',
            username: 'username',
            dateTime: '24 may 23 at 12:34 AM',
            visibility: 'public',
            description: 'This is my description text about nature.',
            likes: 23,
            comments: 18,
            postMedia: 'https://pbs.twimg.com/media/FQvbi4qXIAwul1A.jpg',
        },
    ]

    const AllPosts = () => {
        return Posts.map(item => {
            return <Post data={item} key={item?.id} modalDataHandler={modalDataHandler} />
        })
    }
    const CenteredData = () => {
        return (
            <div className={`col-sm-12 col-md-8 col-lg-6 col-xl-6 m-0 p-0 ${styles.centerbox}`}>
                <div className={`row justify-content-center p-0 m-0`}>
                    <div className={`col-sm-11 col-md-11 col-lg-11 col-xl-10`}>
                        <h3 className={`text-center text-uppercase bg-dark text-white rounded p-2`}>
                            <i className="fa fa fa-plus fa-spin"></i> Add Post
                        </h3>
                        <AllPosts />
                    </div>
                </div>
            </div>
        )
    }
    const LeftSide = () => {
        return (
            <div className={`col-sm-11 col-md-4 col-lg-3 col-xl-3 p-0 ${styles.leftbox}`} style={{borderRight: '0.6px solid #C3C3C3' }}>
                <div>
                    <div className={`mt-2 mb-2 pl-2 pr-2`} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', borderBottom: '0.6px solid #C3C3C3' }}>
                        <h6 className={`font-weight-bold`}>Your Challenges</h6>
                        <Link to='/challenges' className={`text-dark font-weight-bold text-center`}>See All</Link>
                    </div>
                    {products?.length > 0
                        ? <ul className={`pl-3`}>
                            {products.map(item => {
                                return (
                                    <li className={`text-left ${styles.li}`} key={item?.id}>
                                        <Link to={`/profile/${item?.name}`} className={`${styles.link}`}>
                                            <img src={item?.logo} className={`${styles.chImg}`} alt='challenge...' />
                                            <div className={`${styles.chDetail}`}>
                                                <h6 className={`p-0 m-0 font-weight-bold`}>{item?.name}</h6>
                                                <span className={`font-weight-normal small`}>City, Country</span>
                                            </div>
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                        : <p className={`text-center mt-1 font-weight-bold`}><i className="fa fa fa-spinner fa-spin"></i> Loading...</p>
                    }
                </div>
            </div>
        )
    }
    const RightSide = () => {
        return (
            <div className={`col-sm-11 col-md-4 col-lg-3 col-xl-3 p-0 ${styles.rightbox}`} style={{borderLeft: '0.6px solid #C3C3C3' }}>
                <div>
                    <div className={`mt-2 mb-2 pl-2 pr-2`} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', borderBottom: '0.6px solid #C3C3C3' }}>
                        <h6 className={`font-weight-bold`}>New Friend</h6>
                        <Link to='/new-friends' className={`text-dark font-weight-bold text-center`}>See All</Link>
                    </div>
                    {orders?.length > 0
                        ? <ul className={`pl-3`}>
                            {orders.map(item => {
                                return (
                                    <li className={`text-left ${styles.li}`} key={item?.id}>
                                        <Link to={`/profile/${item?.userInfo?.name}`} className={`${styles.link}`}>
                                            <img src={'https://cdn2.excelsior.com.mx/media/styles/image800x600/public/pictures/2021/06/02/2588537.jpg'} className={`rounded ${styles.chImg}`} alt='challenge...' />
                                            <div className={`${styles.chDetail}`}>
                                                <h6 className={`p-0 m-0 font-weight-bold text-uppercase`}>{item?.userInfo?.name}</h6>
                                                <span className={`font-weight-normal small`}>City, Country</span>
                                            </div>
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                        : <p className={`text-center mt-1 font-weight-bold`}><i className="fa fa fa-spinner fa-spin"></i> Loading...</p>
                    }
                </div>
            </div>
        )
    }
    const modalDataHandler = (data) => {
        setModalData(data)
    }

    const fetchProducts = async () => {
        const response = await fetch('https://reactjs-app-aa583-default-rtdb.firebaseio.com/meals.json')

        if (!response.ok) {
            throw new Error(response?.statusText);
        }

        let data = await response.json()
        const loadedItems = []

        for (const key in data) {
            loadedItems.push({
                id: key,
                name: data[key].name,
                description: data[key].description,
                price: data[key].price,
                logo: data[key].logo,
            })
        }
        setProducts(loadedItems)
    }
    const fetchOrders = async () => {
        const response = await fetch('https://reactjs-app-aa583-default-rtdb.firebaseio.com/orders.json')

        if (!response.ok) {
            throw new Error(response?.statusText);
        }

        let data = await response.json()
        const loadedItems = []

        for (const key in data) {
            loadedItems.push({
                products: data[key].products,
                userInfo: data[key].userInfo,
                paymentDetail: data[key].paymentDetail,
                orderDetail: data[key].orderDetail
            })
        }
        setOrders(loadedItems)
    }
    useEffect(() => {
        fetchProducts()
        fetchOrders()
    },[])


    return (
        <div className={`container-fluid mt-5 pt-2`}>
            <div className={`row`} style={{height: '92.5vh'}}>

                <LeftSide />
                <CenteredData />
                <RightSide />

            </div>

            <PostDetailModal data={modalData} />

        </div>
    )
}

export default Home;
