import React from 'react'
import Header from '../../Headers/Header'

const ErrorPage = () => {
    return (
        <div className={`mt-5 pt-3`}>
            <Header />
            <h2 className={`text-center font-weight-bold mt-5`}>An error occured!</h2>
            <p className={`text-center`}>Could not find this page.</p>
        </div>
    )
}

export default ErrorPage
