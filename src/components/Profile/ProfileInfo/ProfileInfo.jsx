import React from 'react';
import classes from './ProfileInfo.module.css'


const ProfileInfo = () => {
    return (
        <div className={classes.info}>
            <div>
                <img src='https://www.electrive.com/wp-content/uploads/2018/06/byd-adl-enviro400ev-elektrobus-electric-bus-london.png' />
            </div>
            <div>Ava + description</div>
        </div>
    );
}

export default ProfileInfo;