import React, { useState } from 'react'
import styles from './styles/Login.module.css'
import MyInputComp from '../../components/UI/MyInput'
import Header from '../../Headers/LoginHeader'
import ImagesBox from '../../components/Login/ImagesBox'


const SignUp = () => {

    const [username, setUsername] = useState('')
    const [usernameError, setUsernameError] = useState(false)
    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState(false)
    const [password, setPassword] = useState('')
    const [passwordError, setPasswordError] = useState(false)
    const [cPassword, setCPassword] = useState('')
    const [cPasswordError, setCPasswordError] = useState(false)

    const usernameHandler = (event) => {
        var val = event?.target?.value
        val = val?.replace(/\s/g, '');
        setUsername(val)
    }
    const onBlurUsernamedHandler = () => {
        if (username.trim() === '') {
            setUsernameError(true)
        }
        else {
            username?.length < 6
                ? setUsernameError(true)
                : setUsernameError(false)
        }
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
    const passwordHandler = (event) => {
        setPassword(event?.target?.value)
    }
    const onBlurPasswordHandler = () => {
        if (password.length <6) {
            setPasswordError(true)
        }
        else {
            setPasswordError(false)
        }
    }
    const cPasswordHandler = (event) => {
        setCPassword(event?.target?.value)
    }
    const onBlurCPasswordHandler = () => {
        if (cPassword === password) {
            setCPasswordError(false)
        }
        else {
            setCPasswordError(true)
        }
    }
    const resetUsestate = () => {
        setUsername('')
        setUsernameError(false)
        setEmail('')
        setEmailError(false)
        setPassword('')
        setPasswordError(false)
        setCPassword('')
        setCPasswordError(false)
    }

    let disabled = (username?.length < 6 || usernameError ||email?.length < 6 || emailError || password?.length < 6 || passwordError || (password !== cPassword)) ? true : false

    const submitFormHandler = (event) => {
        event.preventDefault()
        if (!disabled) {
            let data = {
                username: username,
                email: email,
                password: password
            }
            console.log('Data==', data)
            resetUsestate()
            localStorage.setItem('Login', true)
            alert(`Login Successfully!`)
        }
    }

    const images = [
        'https://images.unsplash.com/photo-1561829252-dfd5dbaedcf3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZsb3dlcnMlMjBuYXR1cmV8ZW58MHx8MHx8fDA%3D&w=1000&q=80',
        'https://cdn.pixabay.com/photo/2020/02/28/05/23/aesthetic-4886533_960_720.jpg',
        'https://pbs.twimg.com/media/FQvbi4qXIAwul1A.jpg',
        'https://www.theroadtripexpert.com/wp-content/uploads/2022/02/flower-captions-for-instagram.png',
        'https://www.gravatar.com/avatar/03b704efdab65c446bb6a1f486f1867f?s=64&d=identicon&r=PG',
        'https://cdn.pixabay.com/photo/2020/02/28/05/23/aesthetic-4886533_960_720.jpg',
        'https://cdn.pixabay.com/photo/2020/02/28/05/23/aesthetic-4886533_960_720.jpg',
        'https://pbs.twimg.com/media/FQvbi4qXIAwul1A.jpg',
        'https://www.pngkey.com/png/detail/123-1236510_rose-flower-stem-garden-nature-rose-of-nature.png',
    ]

    return (
        <div className={`container-fluid`}>
            <Header />

            <div className={`row justify-content-center mt-5 pt-1`}>
                <div className={`row col-sm-12 col-md-12 col-lg-12 col-xl-12 mt-2 p-4`}>
                    {/* LEFT BOX FOR IMAGES */}
                    <ImagesBox images={images} />

                    {/* RIGHT BOX FOR FORM */}
                    <div className={`col-sm-12 col-md-5 col-lg-5 col-xl-5 mt-2 p-4 rounded`}>
                        <div className={`row justify-content-center`}>
                            <div className={`col-sm-8 col-md-12 col-lg-10 col-xl-8 mt-2 p-4 rounded ${styles.rightDiv}`}>
                                <div className={`mt-2 ${styles.avatar}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="#FFFFFF" class="bi bi-person-fill" viewBox="0 0 16 16">
                                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                                    </svg>
                                </div>
                                {/* FORM */}
                                <form className={`${styles.myForm} mt-4`} onSubmit={submitFormHandler}>
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
                                        placeholder='Enter valid eamil'
                                    />
                                    <MyInputComp
                                        label='Password'
                                        type='password'
                                        className={``}
                                        value={password}
                                        onChangeHandler={passwordHandler}
                                        onBlurHandler={onBlurPasswordHandler}
                                        placeholder='Enter password'
                                    />
                                    <MyInputComp
                                        label='Confirm Password'
                                        type='password'
                                        className={``}
                                        value={cPassword}
                                        onChangeHandler={cPasswordHandler}
                                        onBlurHandler={onBlurCPasswordHandler}
                                        placeholder='Enter confirm password'
                                    />

                                    {/* SHOW ERROR */}
                                    {usernameError && <p style={{ margin: 0, color: 'red' }}>Enter minimum 6 character usename</p>}
                                    {emailError && <p style={{ margin: 0, color: 'red' }}>Enter valid email</p>}
                                    {passwordError && <p style={{ margin: 0, color: 'red' }}>Enter minimum 6 character password</p>}
                                    {cPasswordError && <p style={{ margin: 0, color: 'red' }}>Password not matche</p>}

                                    <div className={`row justify-content-center mt-4`}>
                                        <button type="submit" className={`btn btn-info text-black pr-5 pl-5`} style={{ width: '94%' }}>
                                            <span className={`bolder fw-bolder`} style={{ fontWeight: 700, letterSpacing: 1.3, }}>SIGN UP</span>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SignUp