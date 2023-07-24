import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import MyRouteLayout from './App/screens/Login/LoginRoute'
import Login from './App/screens/Login/Login'
import Signup from './App/screens/Login/Signup'
import ForgotPassword from './App/screens/Login/ForgotPassword'

import HomeRoute from './App/screens/Home/HomeRoute'
import Home from './App/screens/Home/Home'


const router = createBrowserRouter([
    {
        path: '/',
        element: <MyRouteLayout />,
        errorElement: <h2>This is error page...</h2>,
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
        children: [
            { path: '/home', element: <Home /> },
        ]
    },
])


const App = () => {
    return <RouterProvider router={router} />
}

export default App
