import React from  'react'
import { useParams } from 'react-router-dom'

const Profile = () => {

    const param = useParams();
    const username = param?.usename

    return (
        <div className={`container-fluid mt-5 pt-3  `}>
            <h2>This profile of {username}. </h2>
        </div>
    )
}

export default Profile
