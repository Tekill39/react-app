import React from 'react';
import classes from './Dialogs.module.css'
import Message from './Message/Message';
import DialogItem from './DialogsItem/DialogsItem';
import { sendMessageCreator, updateNewMessageBodyCreator} from '../../redux/state';


const Dialogs = (props) => {
    
    let state = props.store.getState().dialogsPage;

    let DialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);

    let MesssagesElements = state.message.map(m => < Message message={m.message} />);
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body));
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