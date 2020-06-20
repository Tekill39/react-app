import React from 'react';
import classes from './Posts.module.css';

const Posts = (props) => {
   
    return (
        <div>
            <div className={classes.item}>{props.message}
            <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_TMucoUN1zUfyuV7NZrMns1-BGHMCMdj-gOJp1PiJvzS2ecHC&usqp=CAU" alt="DOG" /></div>
            </div>
            <span>like </span>{props.likesCount}
            <button className={classes.btn}>Add</button>
        </div>
    );
}
// tect
export default Posts;