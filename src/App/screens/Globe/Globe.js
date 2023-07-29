import React, { useState } from 'react'
import styles from './styles/Globe.module.css'

import Posts from '../../components/Globe/GlobePosts'

const Globe = () => {

    const PostData = [
        {
            id: 1,
            userPhoto: 'https://cdn.pixabay.com/photo/2020/02/28/05/23/aesthetic-4886533_960_720.jpg',
            username: 'AsadMumtaz92',
            dateTime: '24 Jan 23 at 11:04 PM',
            visibility: 'private',
            description: 'This is my description text about nature.',
            postMedia: 'https://cdn.pixabay.com/photo/2020/02/28/05/23/aesthetic-4886533_960_720.jpg',
            likes: 38,
            comments: 25,
            share: 3,
            type: 'photo',
            tag: 'nature',
        },
        {
            id: 2,
            userPhoto: '',//'https://images.unsplash.com/photo-1561829252-dfd5dbaedcf3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZsb3dlcnMlMjBuYXR1cmV8ZW58MHx8MHx8fDA%3D&w=1000&q=80',
            username: 'sh4mi',
            dateTime: '2 Jan 23 at 1:34 AM',
            visibility: 'public',
            description: 'This is my description text about nature.',
            postMedia: 'https://images.unsplash.com/photo-1561829252-dfd5dbaedcf3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZsb3dlcnMlMjBuYXR1cmV8ZW58MHx8MHx8fDA%3D&w=1000&q=80',
            likes: 23,
            comments: 18,
            share: 3,
            type: 'reel',
            tag: 'flower',
        },
        {
            id: 3,
            userPhoto: 'https://pbs.twimg.com/media/FQvbi4qXIAwul1A.jpg',
            username: 'username',
            dateTime: '14 Feb 23 at 02:47 AM',
            visibility: 'public',
            description: 'This is my description text about nature.',
            postMedia: 'https://pbs.twimg.com/media/FQvbi4qXIAwul1A.jpg',
            likes: 33,
            comments: 22,
            share: 2,
            type: 'photo',
            tag: 'sun',
        },
        {
            id: 4,
            userPhoto: 'https://www.theroadtripexpert.com/wp-content/uploads/2022/02/flower-captions-for-instagram.png',
            username: 'username',
            dateTime: '24 may 23 at 12:34 AM',
            visibility: 'onlyme',
            description: 'This is my description text about nature.',
            postMedia: 'https://www.theroadtripexpert.com/wp-content/uploads/2022/02/flower-captions-for-instagram.png',
            likes: 23,
            comments: 18,
            share: 2,
            type: 'challange',
            tag: 'qoute',
        },
        {
            id: 5,
            userPhoto: 'https://www.gravatar.com/avatar/03b704efdab65c446bb6a1f486f1867f?s=64&d=identicon&r=PG',
            username: 'username',
            dateTime: '24 may 23 at 12:34 AM',
            visibility: 'public',
            description: 'This is my description text about nature.',
            postMedia: 'https://www.gravatar.com/avatar/03b704efdab65c446bb6a1f486f1867f?s=64&d=identicon&r=PG',
            likes: 233,
            comments: 145,
            share: 6,
            type: 'challange',
            tag: 'other',
        },
        {
            id: 6,
            userPhoto: 'https://cdn.pixabay.com/photo/2020/02/28/05/23/aesthetic-4886533_960_720.jpg',
            username: 'username',
            dateTime: '24 may 23 at 12:34 AM',
            visibility: 'public',
            description: 'This is my description text about nature.',
            postMedia: 'https://cdn.pixabay.com/photo/2020/02/28/05/23/aesthetic-4886533_960_720.jpg',
            likes: 57,
            comments: 9,
            share: 1,
            type: 'reel',
            tag: 'flower',
        },
        {
            id: 7,
            userPhoto: 'https://cdn.britannica.com/92/215392-050-96A4BC1D/Australian-actor-Chris-Hemsworth-2019.jpg',
            username: 'username',
            dateTime: '24 may 23 at 12:34 AM',
            visibility: 'public',
            description: 'Chris Hemsworth.',
            postMedia: 'https://cdn.britannica.com/92/215392-050-96A4BC1D/Australian-actor-Chris-Hemsworth-2019.jpg',
            likes: '1.4k',
            comments: 168,
            share: 99,
            type: 'photo',
            tag: 'photo',
        },
    ]
    const [search, setSearch] = useState('')
    const [filteredData, setFilteredData] = useState(PostData)
    const searchHandler = (event) => {
        let text = event?.target?.value
        text = text?.replace(/\s/g, '');

        setSearch(text)
        const result = PostData.filter(item => item?.tag.toLowerCase().includes(text.toLowerCase()))
        setFilteredData(result)
    }
    const resetSearch = () => {
        setTimeout(() => {
            setFilteredData(PostData)
            setSearch('')
        }, 500);
    }


    return (
        <div className={`container-fluid`} style={{ minHeight: '92.5vh' }}>
            {/* SEARCH */}
            <div className={`row col-sm-12 col-md-12 col-lg-12 col-xl-12 justify-content-center m-0 p-0 mt-2`}>
                <div className={`col-sm-10 col-md-10 col-lg-6 col-xl-6 p-0 m-0`}>
                    <div className={`form-group mb-0`}>
                        <input
                            type={'text'}
                            value={search}
                            onChange={searchHandler}
                            placeholder={'Search tag'}
                            className={`form-control ${styles.ip}`}
                        />
                        </div>
                </div>
                {search && <button onClick={resetSearch} type='submit' className={`ml-2 pr-3 pl-3 rounded font-weight-bold text-uppercase ${styles.reset}`} style={{ border: 'none', }}>Reset</button>}
            </div>
            <hr />
            {/* POSTS */}
            <div className={`row col-sm-12 col-md-12 col-lg-12 col-xl-12 justify-content-center m-0 p-0`}>
                {filteredData.length > 0
                    ? <>
                        < Posts Posts={filteredData} />
                        <Posts Posts={filteredData} />
                    </>
                    : <h3 className={`text-center`}>This <strong className={`text-uppercase`}>#{search}</strong> tag have no post yet!</h3>
                }
            </div>
        </div>
    )
}

export default Globe
