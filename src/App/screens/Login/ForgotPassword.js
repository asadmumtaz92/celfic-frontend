import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import styles from './styles/Login.module.css'
import MyInputComp from '../../components/UI/MyInput'


const ForgotPassword = () => {

    const [username, setUsername] = useState('')
    const [usernameError, setUsernameError] = useState(false)
    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState(false)

    const usernameHandler = (event) => {
        var val = event?.target?.value
        val = val?.replace(/\s/g, '');
        setUsername(val)
    }
    const onBlurUsernamedHandler = () => {
        username?.length < 6
            ? setUsernameError(true)
            : setUsernameError(false)
    }
    const emailHandler = (event) => {
        var val = event?.target?.value
        val = val?.replace(/\s/g, '');
        setEmail(val)
    }
    const onBlurEmailHandler = () => {
        if (email.trim() === '' || !email.includes('@') || !email.includes('.')) {
            setEmailError(true)
        }
        else {
            setEmailError(false)
        }
    }

    let disabled = (username?.length < 6 || usernameError || email?.length < 6 || emailError) ? true : false

    const submitFormHandler = (event) => {
        event.preventDefault()
        if (!disabled) {
            setUsername('')
            setUsernameError(false)
            setEmail('')
            setEmailError(false)
            alert(`Check your ${email} email for varification!`)
        }
    }

    const navigate = useNavigate()
    useEffect(() => {
        const loginStatus = localStorage.getItem('login')
        loginStatus === '1' && navigate('/home')
    }, [navigate])


    return (
        <div className={`container-flud`}>

            <div className={`row justify-content-center`}>
                <div className={`col-sm-7 col-md-5 col-lg-4 col-xl-4 m-2 p-4 rounded ${styles.rightDiv}`}>
                    <div className={`mt-2 ${styles.avatar}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="#FFFFFF" className="bi bi-person-fill" viewBox="0 0 16 16">
                            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                        </svg>
                    </div>
                    {/* FORM */}
                    <form className={`${styles.myForm} mt-5`} onSubmit={submitFormHandler}>
                        <MyInputComp
                            label='Username'
                            type='text'
                            className={``}
                            value={username}
                            onChangeHandler={usernameHandler}
                            onBlurHandler={onBlurUsernamedHandler}
                            placeholder='@username'
                        />
                        <MyInputComp
                            label='Email'
                            type='email'
                            className={``}
                            value={email}
                            onChangeHandler={emailHandler}
                            onBlurHandler={onBlurEmailHandler}
                            placeholder='Enter valid email'
                        />
                        {usernameError === true && <p style={{margin:0, color: 'red'}}>Enter minimum 6 character usename</p>}
                        {emailError === true && <p style={{ margin: 0, color: 'red' }}>Enter valid email</p>}

                        <div className={`row justify-content-center mt-4`}>
                            <button type="submit" className={`btn btn-info text-black pr-5 pl-5`} style={{ width: '94%' }}>
                                <span className={`bolder fw-bolder`} style={{ fontWeight: 700, letterSpacing: 1.3, }}>SUBMIT</span>
                            </button>
                        </div>
                    </form>
                    <hr style={{ height: 2, color: '#C3C3C3', marginTop: 25 }} />
                    <div>
                        <p><b>Note:</b> After submittion check your entered email for varification.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword
