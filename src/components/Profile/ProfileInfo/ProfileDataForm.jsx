import React from 'react';
import { reduxForm } from 'redux-form';
import { createField, Input, Textarea  } from '../../common/FormControls/FormControls';

const ProfileDataForm = ({ handleSubmit, profile}) => {
    return <form onSubmit={handleSubmit}>
        <div><button>save</button></div>
        <div>
            Full name:{createField("Full name", "fullName", [], Input)}
        </div>
        <div>
            Search a job:{createField("", "lookingForAJob", [], Input, { type: "checkbox" })}
        </div>
        <div>
            My professional skills:
            {createField("My professional skills", "lookingForAJobDescription", [], Textarea)}
        </div>

        <div>
            About me:
            {createField("About me", "aboutMe", [], Textarea)}
        </div>
        <div>
            <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                return <div><b>{key}: {createField(key, "contacts." + key, [], Input)} </b>
                    </div>
            })}
        </div>
        <div>

        </div>
    </form>
}
const ProfileDataFormReduxForm = reduxForm({ form: 'edit-profile' })(ProfileDataForm);
export default ProfileDataFormReduxForm;