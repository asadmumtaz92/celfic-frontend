import { Outlet } from 'react-router-dom'
import MainNavigation from '../Navigations/MainNavigation'

const RootLayout = () => {
    return (
        <>
            <MainNavigation />
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default RootLayout
