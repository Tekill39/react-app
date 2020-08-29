import React from 'react';
import classes from './MyPosts.module.css';
import Posts from './Posts/Posts';
import { Field } from 'redux-form'; 
import { reduxForm } from 'redux-form';
import {maxLengthCreator,required} from "../../../utils/validators/validators";
import {Textarea} from '../../../components/common/FormControls/FormControls';


const MyPosts = (props) => {
    let PostsElements = props.posts.map(p => <Posts message={p.message} likesCount={p.likesCount} />);

    let newPostElement = React.createRef();

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className={classes.content}>
            <div className={classes.posts_title}>
                <h3>My post</h3>
                <AddNewPostForm onSubmit={onAddPost} />
                <div className={classes.posts}>
                    {PostsElements}
                </div>
            </div>
        </div>
    );
}
const maxLength10 =maxLengthCreator(10);
function AddNewPostForm (props) {
    return <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="newPostText" component={Textarea} 
                validate={[required, maxLength10]} />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    }
AddNewPostForm = reduxForm({form:"ProfileAddNewPostForm"})(AddNewPostForm);
export default MyPosts;