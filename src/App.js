import { lazy, Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import RootLayout from './App/pages/Root'
import ErrorPage from './App/pages/ErrorPage'

import HomePage from './App/pages/Home'

import { loader as blogLoader } from './App/pages/Blog'
import { loader as postLoader } from './App/pages/Post'

// Lazy fun use for code optamization
const BlogPage = lazy(() => import('./App/pages/Blog'))
const PostPage = lazy(() => import('./App/pages/Post'))


const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: 'posts',
                children: [
                    {
                        index: true,
                        element: (
                            <Suspense fallback={<p>Loading...</p>}>
                                <BlogPage />
                            </Suspense>
                        ),
                        loader: blogLoader
                            // () =>
                            // import('./App/pages/Blog').then((module) => module.loader()),
                    },
                    {
                        path: ':id',
                        element: (
                            <Suspense fallback={<p>Loading...</p>}>
                                <PostPage />
                            </Suspense>
                        ),
                        loader: postLoader
                            // (meta) =>
                            // import('./App/pages/Post').then((module) => module.loader(meta)),
                    },
                ],
            },
        ],
    },
])


const App = () => {

    return (
        <RouterProvider router={router} />
    )
}

export default App
