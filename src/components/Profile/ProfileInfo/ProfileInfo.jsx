import React from 'react';
import classes from './ProfileInfo.module.css'
import Preloader from '../../common/preloader/preloader';
import ProfileStatusWithHoooks from './ProfileStatusWithHoooks';
import userPhoto from '../../../assets/img/users.png';
import { useState } from 'react';
// import editMode from '../ProfileInfo/ProfileStatusWithHoooks';
// import setEditMode from '../ProfileInfo/ProfileStatusWithHoooks';
import ProfileDataForm from './ProfileDataForm';


const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto, safeProfile}) => {

// Govno kod need refactoring
    let [editMode, setEditMode] = useState(false);
//
    if (!profile) {
        return <Preloader />
    }

    
    const onMainFotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }
    const onSubmit = (formData) => {
        safeProfile(formData);
        setEditMode(false);
        }
        
    
    return <div className={classes.info}>
            <img src={profile.photos.large || userPhoto} />
            {isOwner && <input type={"file"} onChange={onMainFotoSelected} />}

            {editMode
                ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit} />
                : 
                <ProfileData goToEditMode={() => { setEditMode(true) }} profile={profile} isOwner={isOwner}/>}

            <ProfileStatusWithHoooks status={status} updateStatus={updateStatus} />
        </div>
}
    

const Contact = ({ contactTitle, conactValue }) => {
    return <div className={classes.contact}><b>{contactTitle}</b>: {conactValue}</div>
}
const ProfileData = ({ profile, isOwner, goToEditMode}) => {

    return <div>
        {isOwner && <div><button onClick={goToEditMode}>edit</button></div>}
        <div>
            Full name:{profile.fullName}
        </div>
        <div>
            Search a job:{profile.lookingForAJob ? "yes" : "no"}
        </div>
        {profile.lookingForAJob &&
            <div>
                Job description:{profile.lookingForAJobDescription}
            </div>
        }
        <div>

        </div>
        <div>
            About me:{profile.aboutMe}
        </div>
        <div>
            <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                return <Contact key={key} contactTitle={key} conactValue={profile.contacts[key]} />
            })}
        </div>
    </div>
}


export default ProfileInfo;