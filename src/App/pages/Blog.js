import { useLoaderData } from 'react-router-dom'

import PostList from '../components/PostList'

const BlogPage = () => {

    // get data from path loader
    const blogPosts = useLoaderData()

    return (
        <PostList posts={blogPosts} />
    )
}

export default BlogPage


// fetch data and pass on page
export const loader = () => {
    return fetch('https://jsonplaceholder.typicode.com/posts')
}


// 1. Design page in component then import here
// 2. Design page & get data from useLoaderData() then pass this data in component 
// 3. Make new Func for fetch data and this func import where create path & send in path loader like loder: loaderData
