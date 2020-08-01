import React from 'react';
import classes from './ProfileInfo.module.css'
import Preloader from '../../common/preloader/preloader';


const ProfileInfo = (props) => {
   
    if(!props.profile){
        return <Preloader/>
    }

    return (
        <div className={classes.info}>
            <div>
                <img src='https://www.electrive.com/wp-content/uploads/2018/06/byd-adl-enviro400ev-elektrobus-electric-bus-london.png' />
            </div>
            <div><img src ={props.profile.photos.large}/>Ava + description</div>
        </div>
    );
}

export default ProfileInfo;