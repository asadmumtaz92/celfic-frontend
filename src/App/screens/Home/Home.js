import React, { useState, useEffect } from 'react'
// import styles from './styles/Home.module.css'
import Post from '../../components/Home/Post'


const Home = () => {

    const [products, setProducts] = useState([])
    const [orders, setOrders] = useState([])
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
            return  <Post data={item} key={item?.id} />
        })
    }

    const CenteredData = () => {
        return (
            <div className={`col-sm-11 col-md-11 col-lg-6 col-xl-6`}>
                <div className={`row justify-content-center `}>
                    <div className={`col-sm-11 col-md-11 col-lg-10 col-xl-10`}>
                        <AllPosts />
                    </div>
                </div>
            </div>
        )
    }
    const LeftSide = () => {
        return (
            <div className={`col-sm-11 col-md-11 col-lg-3 col-xl-3 text-center`} style={{ borderRight: '0.6px solid #C3C3C3' }}>
                <div>
                    <h4>Your Challenges</h4>
                    {products?.length > 0
                        ? <ul>
                            {products.map(item => <li className={`text-left`} key={item?.id}>{item?.name}</li> )}
                        </ul>
                        : <p className={`text-center mt-1 font-weight-bold`}><i className="fa fa fa-spinner fa-spin"></i> Loading...</p>
                    }
                </div>
                <div style={{ marginTop: '100vh' }}>
                    <h4>Tags</h4>
                    <p className={`text-center mt-1 font-weight-bold`}><i className="fa fa fa-spinner fa-spin"></i> Loading...</p>
                </div>
            </div>
        )
    }
    const RightSide = () => {
        return (
            <div className={`col-sm-11 col-md-11 col-lg-3 col-xl-3 text-center`} style={{ borderLeft: '0.6px solid #C3C3C3' }}>
                <div>
                    <h4>Suggations</h4>
                    {orders?.length > 0
                        ? <ul>
                            {orders.map(item => {
                                // let orderData = item?.item
                                // let userInfo = orderData?.userInfo
                                // let orderDetail = orderData?.orderDetail
                                // let paymentDetail = orderData?.paymentDetail
                                return (
                                    <li className={`text-left text-uppercase m-2`}>{item?.userInfo?.name}</li>
                                )
                            })}
                        </ul>
                        : <p className={`text-center mt-1 font-weight-bold`}><i className="fa fa fa-spinner fa-spin"></i> Loading...</p>
                    }
                </div>
                <div style={{ marginTop: '50vh' }}>
                    <h4>Advertisement</h4>
                    <p className={`text-center mt-1 font-weight-bold`}><i className="fa fa fa-spinner fa-spin"></i> Loading...</p>
                </div>
            </div>
        )
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
        <div className={`container-fluid mt-5 pt-3`}>
            <div className={`row`}>

                <LeftSide />
                <CenteredData />
                <RightSide />

            </div>
        </div>
    )
}

export default Home;
