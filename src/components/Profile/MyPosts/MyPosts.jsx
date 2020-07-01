import React from 'react';
import classes from './MyPosts.module.css';
import Posts from './Posts/Posts'

const MyPosts = (props) => {
    let PostsElements = props.posts.map(p => <Posts message={p.message} likesCount={p.likesCount} />);

    let newPostElement=React.createRef();
   
    let addPost = ()=> {
       
        let text = newPostElement.current.value;
        props.addPost(text);
        props.updateNewPostText ('');
    
    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText();
    }

    return (
        <div className={classes.content}>


            <div className={classes.posts_title}>
                <div>My post</div>
                <div>
                    <div>
                        <textarea ref={newPostElement}></textarea>
                    </div>
                    <div>
                        <button className={classes.bat} onClick = {addPost }>Add post</button>
                    </div>

                </div>
                <div className={classes.posts}>
                    {PostsElements}
                </div>
            </div>
        </div>
    );
    }

export default MyPosts;