import { useLoaderData } from 'react-router-dom'

import PostItem from '../components/PostItem'

const PostPage = () => {

    // get data from path loader
    const post = useLoaderData()

    return (
        <PostItem post={post} />
    )
}

export default PostPage


// Fetch data of single post
export const loader = ({ params }) => {
    const postId = params.id
    return fetch('https://jsonplaceholder.typicode.com/posts/' + postId)
}

// 1. Design page in component then import here
// 2. Design page & get data from useLoaderData() then pass this data in component 
// 3. Make new Func for fetch data and this func import where create path & send in path loader like loder: loaderData
