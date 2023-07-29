import React from 'react'
import { useParams } from 'react-router-dom'

import UserProfilePhoto from '../../components/Profile/UserProfilePhoto'
import Network from '../../components/Profile/Network'
import Posts from '../../components/Profile/Posts'


const Profile = () => {

    const param = useParams();
    const username = param?.usename

    const userInfo = {
        username: username,
        fullname: 'malik asad mumtaz',
        isOnwer: false,
        image: `https://cdn.britannica.com/92/215392-050-96A4BC1D/Australian-actor-Chris-Hemsworth-2019.jpg`,
        gender: 'male',
        isFollow: true,
        verify: true
    }
    const myNetwork = {
        follower: 3924,
        following: 7,
        popularity: 76.4
    }
    const PostData = [
        {
            id: 1,
            userPhoto: 'https://cdn.pixabay.com/photo/2020/02/28/05/23/aesthetic-4886533_960_720.jpg',
            username: 'AsadMumtaz92',
            dateTime: '24 Jan 23 at 11:04 PM',
            visibility: 'private',
            description: 'This is my description text about nature.',
            postMedia: 'https://cdn.pixabay.com/photo/2020/02/28/05/23/aesthetic-4886533_960_720.jpg',
            likes: 38,
            comments: 25,
            share: 3,
            type: 'photo',
        },
        {
            id: 2,
            userPhoto: '',//'https://images.unsplash.com/photo-1561829252-dfd5dbaedcf3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZsb3dlcnMlMjBuYXR1cmV8ZW58MHx8MHx8fDA%3D&w=1000&q=80',
            username: 'sh4mi',
            dateTime: '2 Jan 23 at 1:34 AM',
            visibility: 'public',
            description: 'This is my description text about nature.',
            postMedia: 'https://images.unsplash.com/photo-1561829252-dfd5dbaedcf3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZsb3dlcnMlMjBuYXR1cmV8ZW58MHx8MHx8fDA%3D&w=1000&q=80',
            likes: 23,
            comments: 18,
            share: 3,
            type: 'reel',
        },
        {
            id: 3,
            userPhoto: 'https://pbs.twimg.com/media/FQvbi4qXIAwul1A.jpg',
            username: 'username',
            dateTime: '14 Feb 23 at 02:47 AM',
            visibility: 'public',
            description: 'This is my description text about nature.',
            postMedia: 'https://pbs.twimg.com/media/FQvbi4qXIAwul1A.jpg',
            likes: 33,
            comments: 22,
            share: 2,
            type: 'photo',
        },
        {
            id: 4,
            userPhoto: 'https://www.theroadtripexpert.com/wp-content/uploads/2022/02/flower-captions-for-instagram.png',
            username: 'username',
            dateTime: '24 may 23 at 12:34 AM',
            visibility: 'onlyme',
            description: 'This is my description text about nature.',
            postMedia: 'https://www.theroadtripexpert.com/wp-content/uploads/2022/02/flower-captions-for-instagram.png',
            likes: 23,
            comments: 18,
            share: 2,
            type: 'challange',
        },
        {
            id: 5,
            userPhoto: 'https://www.gravatar.com/avatar/03b704efdab65c446bb6a1f486f1867f?s=64&d=identicon&r=PG',
            username: 'username',
            dateTime: '24 may 23 at 12:34 AM',
            visibility: 'public',
            description: 'This is my description text about nature.',
            postMedia: 'https://www.gravatar.com/avatar/03b704efdab65c446bb6a1f486f1867f?s=64&d=identicon&r=PG',
            likes: 233,
            comments: 145,
            share: 6,
            type: 'challange',
        },
        {
            id: 6,
            userPhoto: 'https://cdn.pixabay.com/photo/2020/02/28/05/23/aesthetic-4886533_960_720.jpg',
            username: 'username',
            dateTime: '24 may 23 at 12:34 AM',
            visibility: 'public',
            description: 'This is my description text about nature.',
            postMedia: 'https://cdn.pixabay.com/photo/2020/02/28/05/23/aesthetic-4886533_960_720.jpg',
            likes: 57,
            comments: 9,
            share: 1,
            type: 'reel',
        },
        {
            id: 7,
            userPhoto: 'https://cdn.britannica.com/92/215392-050-96A4BC1D/Australian-actor-Chris-Hemsworth-2019.jpg',
            username: 'username',
            dateTime: '24 may 23 at 12:34 AM',
            visibility: 'public',
            description: 'Chris Hemsworth.',
            postMedia: 'https://cdn.britannica.com/92/215392-050-96A4BC1D/Australian-actor-Chris-Hemsworth-2019.jpg',
            likes: '1.4k',
            comments: 168,
            share: 99,
            type: 'photo',
        },
    ]

    
    return (
        <div className={`container-fluid mt-5 pt-2`} style={{ minHeight: '92.5vh' }}>
            <div className={`row justify-content-center col-sm-12 col-md-12 col-lg-12 col-xl-12 m-0 p-0`}>
                {/* USER INFO */}
                <div className={`col-sm-12 col-md-12 col-lg-12 col-xl-12 p-0`}>
                    <UserProfilePhoto userInfo={userInfo} />
                </div>
                {/* NETWORKS */}
                <div className={`col-sm-12 col-md-12 col-lg-8 col-xl-8 p-0 mt-4`}>
                    <Network myNetwork={myNetwork} />
                </div>
                {/* MEDIA */}
                <div className={`row col-sm-12 col-md-12 col-lg-12 col-xl-12 p-0 mt-4`}>
                    <Posts Posts={PostData} />
                </div>
            </div>
        </div>
    )
}

export default Profile
