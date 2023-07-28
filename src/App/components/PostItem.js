import classes from './PostItem.module.css'

const PostItem = ({ post }) => {

    return (
        <article className={classes.item}>
            {post?.title
                ? <div className={`${classes.itemBody}`}>
                    <h2>{post.title}</h2>
                    <br/>
                    <p>{post.body}</p>
                </div>
                : <div className={`${classes.itemBody}`}>
                    <h1>An error occuer!</h1>
                    <p>Post data not fetched...</p>
                </div>
            }
        </article>
    );
}

export default PostItem
