import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../Headers/Header'
import Footer from '../../components/UI/Footer'

const HomeRoute = () => {
    return (
        <React.Fragment>
            <Header />
            <Outlet />
            <Footer />
        </React.Fragment>
    )
}

export default HomeRoute
