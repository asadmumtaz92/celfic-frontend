import { Link } from 'react-router-dom'

import classes from './PostList.module.css'

const PostList = ({ posts }) => {

    return (
        posts?.length
            ? <ul className = {classes.list}>
                {posts.map((post) => {
                    return (
                        <li key={post.id}>
                            <Link to={post.id.toString()}>{post.title}</Link>
                        </li>
                    )
                }
                )}
            </ul>
            : <div className={`${classes.itemBody}`}>
                <h1>An error occuer!</h1>
                <p>Data not fetched...</p>
            </div>
    );
}

export default PostList
