import React from 'react';
import classes from './ProfileInfo.module.css'
import Preloader from '../../common/preloader/preloader';
import ProfileStatusWithHoooks from './ProfileStatusWithHoooks';
import userPhoto from '../../../assets/img/users.png';



const ProfileInfo = ({ profile, status, updateStatus, isOwner,savePhoto }) => {

    if (!profile) {
        return <Preloader />
    }
    const onMainFotoSelected = (e) => {
        if (e.target.files.lenght) {
            savePhoto(e.target.files[0]);
        }
    }
    return (
        <div className={classes.info}><img src={profile.photos.large || userPhoto} />
            {isOwner && <input type={"file"} onChange={onMainFotoSelected} />}
          

            <ProfileStatusWithHoooks status={status} updateStatus={updateStatus} />
        </div>
    );
}

export default ProfileInfo;