import React from 'react';
import classes from './MyPosts.module.css';
import Posts from './Posts/Posts'

const MyPosts = () => {

    let PostData = [
        { id: '1', message: 'Hi, how are you?', likesCount:'21' },
        { id: '2', message: 'Its my first post', likesCount:'42'}
    ]
    let PostsElements = PostData.map(p=><Posts message={p.message}  likesCount={p.likesCount}/>);

    return (
        <div className={classes.content}>

            <div>Ava + description</div>
            <div className={classes.posts_title}>
                <div>My post</div>
                <div className={classes.posts}>
                    {PostsElements}
                </div>    
            </div>
        </div>
    );
}
// tect
export default MyPosts;