import React from 'react';
import classes from './ProfileInfo.module.css'
import Preloader from '../../common/preloader/preloader';
import ProfileStatusWithHoooks from './ProfileStatusWithHoooks';


const ProfileInfo = ({profile,status,updateStatus}) => {
   
    if(!profile){
        return <Preloader/>
    }

    return (
        <div className={classes.info}><img src ={profile.photos.large}/>
            
            <ProfileStatusWithHoooks status={status} updateStatus={updateStatus}/>
        </div>
    );
}

export default ProfileInfo;