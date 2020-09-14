import React from 'react';
import classes from './Dialogs.module.css'
import Message from './Message/Message';
import DialogItem from './DialogsItem/DialogsItem';
import { Redirect } from 'react-router-dom';
import { Field } from 'redux-form'; 
import { reduxForm } from 'redux-form';
import AddMessageForm from '../common/AddMessageForm';


const Dialogs = (props) => {

    let state = props.dialogsPage;

    let DialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id} />);

    let MesssagesElements = state.message.map(m => < Message message={m.message} key={m.id} />);
    let newMessageBody = state.newMessageBody;

    let addNewMessage=(values)=>{
        props.SendMessage(values.newMessageBody);
    }
    
    if (!props.isAuth) return <Redirect to={"/login"} />;


    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                {DialogsElements}
            </div>
            <div className={classes.messages}>
                <div>{MesssagesElements}</div>
                <AddMessageForm onSubmit={addNewMessage}/>
        </div>
        </div >
    );
}


export default Dialogs;