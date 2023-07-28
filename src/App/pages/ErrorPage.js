import MainNavigation from '../components/Navigations/MainNavigation'

const ErrorRootLayout = () => {
    return (
        <>
            <MainNavigation />
            <main>
                <div style={{ textAlign: 'center', marginTop: 40, fontSize: 22 }}>
                    <h1>An error occuer!</h1>
                    <p>Invalid page path...</p>
                </div>
            </main>
        </>
    )
}

export default ErrorRootLayout
