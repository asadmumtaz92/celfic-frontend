import React from 'react'
// import styles from './styles/Home.module.css'
import Post from '../../components/Home/Post'


const Home = (props) => {

    const Posts = [
        {
            id: 1,
            userPhoto: 'https://cdn.pixabay.com/photo/2020/02/28/05/23/aesthetic-4886533_960_720.jpg',
            username: 'username',
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
            username: 'AsadMumtaz92',
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
            return  <Post data={item} />
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
                    <p className={`text-center mt-1 font-weight-bold`}><i class="fa fa fa-spinner fa-spin"></i> Loading...</p>
                </div>
                <div style={{ marginTop: '100vh' }}>
                    <h4>Tags</h4>
                    <p className={`text-center mt-1 font-weight-bold`}><i class="fa fa fa-spinner fa-spin"></i> Loading...</p>
                </div>
            </div>
        )
    }
    const RightSide = () => {
        return (
            <div className={`col-sm-11 col-md-11 col-lg-3 col-xl-3 text-center`} style={{ borderLeft: '0.6px solid #C3C3C3' }}>
                <div>
                    <h4>Suggations</h4>
                    <p className={`text-center mt-1 font-weight-bold`}><i class="fa fa fa-spinner fa-spin"></i> Loading...</p>
                </div>
                <div style={{ marginTop: '75vh' }}>
                    <h4>Advertisement</h4>
                    <p className={`text-center mt-1 font-weight-bold`}><i class="fa fa fa-spinner fa-spin"></i> Loading...</p>
                </div>
            </div>
        )
    }


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
