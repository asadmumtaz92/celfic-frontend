import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import MyRouteLayout from './App/screens/Login/LoginRoute'
import ErrorPageLogin from './App/screens/Login/ErrorPageLogin'
import Login from './App/screens/Login/Login'
import Signup from './App/screens/Login/Signup'
import ForgotPassword from './App/screens/Login/ForgotPassword'

import HomeRoute from './App/screens/Home/HomeRoute'
import ErrorPageHome from './App/screens/Home/ErrorPageHome'
import Home from './App/screens/Home/Home'
import Profile from './App/screens/Home/Profile'


const router = createBrowserRouter([
    {
        path: '/',
        element: <MyRouteLayout />,
        errorElement: <ErrorPageLogin />,
        children: [
            { path: '/', element: <Login /> },
            { path: '/login', element: <Login /> },
            { path: '/signup', element: <Signup /> },
            { path: '/recover-password', element: <ForgotPassword /> },
        ]
    },
    // {
    //     path: '/home',
    //     element: <HomeRoute />,
    //     errorElement: <ErrorPageHome />,
    //     children: [
    //         { path: '', element: <Home />, errorElement: <ErrorPageHome /> },
    //         { path: 'create-post', element: <h2 className='mt-5 pt-3 text-center'>This screen for create new post/ challange...</h2>, errorElement: <ErrorPageHome /> },
    //         { path: 'profile', element: <Profile />, errorElement: <ErrorPageHome /> }
    //     ]
    // },
    {
        path: '/home',
        element: <HomeRoute />,
        errorElement: <ErrorPageHome />,
        children: [
            { path: '', element: <Home />, errorElement: <ErrorPageHome /> }
        ]
    },
    {
        path: '/profile',
        element: <HomeRoute />,
        errorElement: <ErrorPageHome />,
        children: [
            { path: '/profile/:usename', element: <Profile />, errorElement: <ErrorPageHome /> },
        ]
    },
    {
        path: '/globe',
        element: <HomeRoute />,
        errorElement: <ErrorPageHome />,
        children: [
            { path: '/globe', element: <h2 className='mt-5 pt-3 text-center mb-5'>This is globe page...</h2>, errorElement: <ErrorPageHome />, },
        ]
    },
    {
        path: '/notifications',
        element: <HomeRoute />,
        errorElement: <ErrorPageHome />,
        children: [
            { path: '/notifications', element: <h2 className='mt-5 pt-3 text-center mb-5'>This is notifications page...</h2>, errorElement: <ErrorPageHome />, },
        ]
    },
    {
        path: '/chat',
        element: <HomeRoute />,
        errorElement: <ErrorPageHome />,
        children: [
            { path: '/chat', element: <h2 className='mt-5 pt-3 text-center mb-5'>This is chat page...</h2>, errorElement: <ErrorPageHome />, },
        ]
    },
])


const App = () => {
    return <RouterProvider router={router} />
}

export default App
