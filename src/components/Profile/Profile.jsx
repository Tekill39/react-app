import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return (
        <div className={classes.content}>
            <div>
                <img src='https://www.electrive.com/wp-content/uploads/2018/06/byd-adl-enviro400ev-elektrobus-electric-bus-london.png' />
            </div>
            <div>Ava + description</div>
           <MyPosts />
        </div>
    );
}
// tect
export default Profile;