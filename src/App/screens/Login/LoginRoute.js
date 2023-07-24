import React from 'react'
import { Outlet } from 'react-router-dom'
import LoginHeader from '../../Headers/LoginHeader'

const MyRoute = () => {
    return (
        <React.Fragment>
            <LoginHeader />
            <Outlet />
        </React.Fragment>
    )
}

export default MyRoute
