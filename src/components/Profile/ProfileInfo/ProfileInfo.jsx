import React from 'react';
import classes from './ProfileInfo.module.css'
import Preloader from '../../common/preloader/preloader';
import ProfileStatusWithHoooks from './ProfileStatusWithHoooks';


const ProfileInfo = (props) => {
   
    if(!props.profile){
        return <Preloader/>
    }

    return (
        <div className={classes.info}><img src ={props.profile.photos.large}/>
            
            <ProfileStatusWithHoooks status={props.status} updateStatus={props.updateStatus}/>
        </div>
    );
}

export default ProfileInfo;