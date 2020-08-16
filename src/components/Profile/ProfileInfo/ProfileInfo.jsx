import React from 'react';
import classes from './ProfileInfo.module.css'
import Preloader from '../../common/preloader/preloader';
import ProfileStatus from './ProfileStatus';


const ProfileInfo = (props) => {
   
    if(!props.profile){
        return <Preloader/>
    }

    return (
        <div className={classes.info}><img src ={props.profile.photos.large}/>
            
            <ProfileStatus status={"Hello everybody"}/>
        </div>
    );
}

export default ProfileInfo;