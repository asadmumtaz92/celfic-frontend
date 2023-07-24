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
    {
        path: '/home',
        element: <HomeRoute />,
        errorElement: <ErrorPageHome />,
        children: [
            { path: '/home', element: <Home />, errorElement: <ErrorPageHome />, },
        ]
    },
])


const App = () => {
    return <RouterProvider router={router} />
}

export default App
