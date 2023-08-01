import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import MyRouteLayout from './App/screens/Login/LoginRoute'
import ErrorPageLogin from './App/screens/Login/ErrorPageLogin'
import Login from './App/screens/Login/Login'
import Signup from './App/screens/Login/Signup'
import ForgotPassword from './App/screens/Login/ForgotPassword'

import HomeRoute from './App/screens/Home/HomeRoute'
import Home from './App/screens/Home/Home'
import Notifications from './App/screens/Home/Notifications'
import Chat from './App/screens/Home/Chat'

import Profile from './App/screens/Profile/index'

import Globe from './App/screens/Globe/Globe'


const router = createBrowserRouter([
    {
        path: '/',
        element: <MyRouteLayout />,
        errorElement: <ErrorPageLogin />,
        children: [
            { index: true, element: <Login /> },
            { path: '/login', element: <Login /> },
            { path: '/signup', element: <Signup /> },
            { path: '/recover-password', element: <ForgotPassword /> },
            {
                path: '/',
                element: <HomeRoute />,
                children: [
                    { path: 'home', index: true, element: <Home /> },
                    { path: 'profile/:usename', element: <Profile /> },
                    { path: 'globe', element: <Globe /> },
                    { path: 'notifications', element: <Notifications /> },
                    { path: 'settings', element: <h2 className='mt-5 pt-3 text-center mb-5'>This is setting page...</h2> },
                    { path: 'challenges', element: <h2 className='mt-5 pt-3 text-center mb-5'>This is challenges page...</h2> },
                    { path: 'new-friends', element: <h2 className='mt-5 pt-3 text-center mb-5'>This is new - friend page...</h2> },
                    // { path: 'post/:postid', element: <h2 className='mt-5 pt-3 text-center mb-5'>This is post detail page...</h2> },
                    {
                        path: 'chat',
                        element: <HomeRoute />,
                        children: [
                            { path: '', element: <Chat /> },
                            // { path: ':username', element: <h2 className='mt-5 pt-3 text-center mb-5'>This is single user chat page...</h2> },
                        ]
                    },
                ]
            },
        ],
    },
])


const App = () => {
    return <RouterProvider router={router} />
}

export default App
