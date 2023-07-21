import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Login from './App/screens/Login/Login'
import Signup from './App/screens/Login/Signup'
import ForgotPassword from './App/screens/Login/ForgotPassword'


const router = createBrowserRouter([
    { path: '/', element: <Login /> },
    { path: '/login', element: <Login /> },
    { path: '/signup', element: <Signup /> },
    { path: '/recover-password', element: <ForgotPassword /> },
])


const App = () => <RouterProvider router={router} />

export default App
