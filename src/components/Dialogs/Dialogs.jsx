import React from 'react';
import classes from './Dialogs.module.css'
import Message from './Message/Message';
import DialogItem from './DialogsItem/DialogsItem';


const Dialogs = (props) => {
    
    let state = props.dialogsPage;

    let DialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id} />);

    let MesssagesElements = state.message.map(m => < Message message={m.message}  key={m.id} />);
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.SendMessage();
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                {DialogsElements}
            </div>
            <div className={classes.messages}>
                <div>{MesssagesElements}</div>
                <div>
                    <div><textarea value={newMessageBody}
                        onChange={onNewMessageChange} placeholder='Enter your message'></textarea></div>
                    <div><button onClick={onSendMessageClick}>Send</button></div>
                </div>
            </div>
        </div>
    );
}
export default Dialogs;