import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import styles from './styles/Login.module.css'
import MyInput from '../../components/UI/MyInput'
import ImagesBox from '../../components/Login/ImagesBox'


const Login = () => {

    const navigate = useNavigate()
    const [users, setUsers] = useState([])
    const [isLoader, setIsLoader] = useState(false)
    const [httpError, setHttpError] = useState('')

    const [username, setUsername] = useState('')
    const [usernameError, setUsernameError] = useState(false)
    const [password, setPassword] = useState('')
    const [passwordError, setPasswordError] = useState(false)

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
    const passwordHandler = (event) => {
        setPassword(event?.target?.value)
    }
    const onBlurPasswordHandler = () => {
        password?.length < 6
            ? setPasswordError(true)
            : setPasswordError(false)
    }
    const restart = () => {
        setUsername('')
        setUsernameError(false)
        setPassword('')
        setPasswordError(false)
    }

    let disabled = (username?.length < 6 || usernameError || password?.length < 6 || passwordError) ? true : false

    const submitFormHandler = (event) => {
        event.preventDefault()
        setHttpError('')
        setIsLoader(true)

        if (!disabled) {
            // check username is exist or not
            const result = users.filter(item => item?.username.toLowerCase().includes(username.toLowerCase()))
            if (result.length > 0) {
                // check username matched or not
                let chkUser = false
                for (const key in result) {
                    // if ((result[key].username === username) && (result[key].password === password)) {
                    //     chkUser = true
                    // }
                    result[key].username === username
                        ? chkUser = true
                        : chkUser = false
                }
                if (chkUser) {
                    // check password matched or not
                    let chkPw = false
                    for (const key in result) {
                        if ((result[key].password === password) && result[key].username === username) {
                            chkPw = true
                        }
                    }
                    // if password matched
                    if (chkPw) {
                        setTimeout(() => {
                            restart()
                            localStorage.setItem('login', '1')
                            localStorage.setItem('token', result[0].token)
                            localStorage.setItem('username', username)
                            navigate('/home')
                            setIsLoader(false)
                            setHttpError('')
                        }, 500);
                    }
                    else {
                        setHttpError('You enter invalid password!')
                        setIsLoader(false)
                    }
                }
                else {
                    setHttpError('You enter invalid username!')
                    setIsLoader(false)
                }
            }
            else {
                setHttpError('You enter invalid username!')
                setIsLoader(false)
            }
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

    const getUserList = async () => {
        const response = await fetch('https://celfic-d7b8c-default-rtdb.asia-southeast1.firebasedatabase.app/Users.json')
        if (response.ok) {
            let data = await response.json()
            const loadedItems = []

            for (const key in data) {
                loadedItems.push({
                    id: key,
                    username: data[key].username,
                    email: data[key].email,
                    token: data[key].token,
                    password: data[key].password,
                })
            }
            setUsers(loadedItems)
        }
        else {
            throw new Error(response?.statusText)
        }
    }

    useEffect(() => {
        const loginStatus = localStorage.getItem('login')
        loginStatus === '1' && navigate('/home')
        getUserList()
    }, [navigate])


    return (
        <div className={`container-fluid`}>

            <div className={`row justify-content-center`}>
                <div className={`row col-sm-12 col-md-12 col-lg-12 col-xl-12 mt-2 p-4`}>
                    {/* LEFT BOX FOR IMAGES */}
                    <ImagesBox images={images} />

                    {/* RIGHT BOX FOR FORM */}
                    <div className={`col-sm-12 col-md-5 col-lg-5 col-xl-5 mt-2 p-4 rounded`}>
                        <div className={`row justify-content-center`}>
                            <div className={`col-sm-8 col-md-12 col-lg-10 col-xl-8 mt-2 p-4 rounded ${styles.rightDiv}`}>
                                <div className={`mt-2 ${styles.avatar}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="#FFFFFF" className="bi bi-person-fill" viewBox="0 0 16 16">
                                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                                    </svg>
                                </div>
                                {/* FORM */}
                                <form className={`${styles.myForm} mt-5`} onSubmit={submitFormHandler}>
                                    {httpError && <p style={{ margin: 0, color: 'red' }} className={`text-center mb-2`}>{httpError}</p>}
                                    
                                    <MyInput
                                        label='Username'
                                        type='text'
                                        className={``}
                                        value={username}
                                        onChangeHandler={usernameHandler}
                                        onBlurHandler={onBlurUsernamedHandler}
                                        placeholder='@username'
                                    />
                                    <MyInput
                                        label='Password'
                                        type='password'
                                        className={``}
                                        value={password}
                                        onChangeHandler={passwordHandler}
                                        onBlurHandler={onBlurPasswordHandler}
                                        placeholder='Enter password'
                                    />
                                    {usernameError && <p style={{ margin: 0, color: 'red' }}>Enter minimum 6 character usename</p>}
                                    {passwordError && <p style={{ margin: 0, color: 'red' }}>Enter valid password</p>}

                                    <div className={`row justify-content-center mt-4`}>
                                        <button type="submit" className={`btn btn-info text-black pr-5 pl-5`} style={{ width: '94%' }}>
                                            {isLoader
                                                ? <><i className="fa fa fa-plus fa-spin"></i> Processing...</>
                                                : <span className={`bolder fw-bolder`} style={{ fontWeight: 700, letterSpacing: 1.3, }}>LOG IN</span>
                                            }
                                        </button>
                                    </div>
                                </form>
                                <hr style={{ height: 2, color: '#C3C3C3', marginTop: 25 }} />
                                <div>
                                    <Link to='/recover-password'>Forgot Password?</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login
