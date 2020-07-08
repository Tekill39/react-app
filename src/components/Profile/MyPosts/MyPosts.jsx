import React from 'react';
import classes from './MyPosts.module.css';
import Posts from './Posts/Posts';
import {addPostActionCreator,updateoNewPostTextActionCreator} from '../../../redux/state';

let addPostActionCreator = () => {
    return {
        type: 'ADD-POST'
    }
}

let updateoNewPostTextActionCreator = (text) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT', newText: text
    }
}

const MyPosts = (props) => {
    let PostsElements = props.posts.map(p => <Posts message={p.message} likesCount={p.likesCount} />);

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator(text));
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(updateoNewPostTextActionCreator());
    }

    return (
        <div className={classes.content}>


            <div className={classes.posts_title}>
                <div>My post</div>
                <div>
                    <div>
                        <textarea onChange={onPostChange} ref={newPostElement}
                            value={props.newPostText} />
                    </div>
                    <div>
                        <button className={classes.bat} onClick={addPost}>Add post</button>
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