import React from 'react';
import classes from './Dialogs.module.css'
import { NavLink } from 'react-router-dom';
import Message from './Message/Message';
import DialogItem from './DialogsItem/DialogsItem';



const Dialogs = (props) => {
    
   

    let DialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);

    let MesssagesElements = props.state.message.map(m => < Message message={m.message} />);

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                {DialogsElements}
            </div>
            <div className={classes.messages}>
                {MesssagesElements}
            </div>
        </div>
    );
}
export default Dialogs;