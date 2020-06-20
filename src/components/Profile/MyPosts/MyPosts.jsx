import React from 'react';
import classes from './MyPosts.module.css';
import Posts from './Posts/Posts'

const MyPosts = () => {
    return (
        <div className={classes.content}>
           
            <div>Ava + description</div>
            <div className={classes.posts_title}>
            <div>My post</div>
            <div className={classes.posts}>
            <Posts message ='Hi, how are you?' likesCount='21' />
            <Posts message ="It's my first post" likesCount='42'/>
            </div>
            </div>
        </div>
    );
}
// tect
export default MyPosts;