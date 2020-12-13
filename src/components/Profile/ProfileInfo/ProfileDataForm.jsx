import React from 'react';
import { reduxForm } from 'redux-form';
import {createField,Input} from '../../common/FormControls/FormControls';

const ProfileDataForm = ({profile}) => {
   return <form>
       <div><button onClick={()=>{}}>save</button></div>
    {/* <div>
        Full name:{createField("Full name", "fullName", [], Input)}
    </div> */}
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
        
    </div>
</form>
}
const ProfileDataFormReduxForm = reduxForm({form:'edit0profile'}) (ProfileDataForm);
export default ProfileDataFormReduxForm;