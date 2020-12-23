import React from 'react';
import { reduxForm } from 'redux-form';
import { createField, Input, Textarea  } from '../../common/FormControls/FormControls';

const ProfileDataForm = ({ handleSubmit, profile }) => {
    return <form onSubmit={handleSubmit}>
        <div><button>save</button></div>
        <div>
            Full name:{createField("Full name", "fullName", [], Input)}
        </div>
        <div>
            Search a job:{profile.lookingForAJob ? "yes" : "no"}
            {createField("", "lookingForAJob", [], Input, { type: "checkbox" })}
        </div>
        <div>
            My professional skills:{profile.aboutMe}
            {createField("My professional skills", "lookingForAJobDescription", [], Textarea)}
        </div>

        <div>
            About me:{profile.aboutMe}
            {createField("About me", "aboutMe", [], Textarea)}
        </div>
        <div>

        </div>
    </form>
}
const ProfileDataFormReduxForm = reduxForm({ form: 'edit-profile' })(ProfileDataForm);
export default ProfileDataFormReduxForm;