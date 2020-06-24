import React from 'react';
import classes from './Dialogs.module.css'
import { NavLink } from 'react-router-dom';
import Message from './Message/Message';
import DialogItem from './DialogsItem/DialogsItem';



const Dialogs = (props) => {
    let dialogsData = [
        { id: '1', name: 'Misha' },
        { id: '2', name: 'Dima' },
        { id: '3', name: 'Masha' },
        { id: '4', name: 'Sasha' },
        { id: '5', name: 'Maxim' },
        { id: '6', name: 'Toma' }
    ]

    let messageData = [
        { id: '1', message: 'Misha' },
        { id: '2', message: 'Dima' },
        { id: '3', message: 'Masha' },
        { id: '4', message: 'Sasha' },
        { id: '5', message: 'Maxim' },
        { id: '6', message: 'Toma' }
    ]

    let DialogsElements = dialogsData.map(d => <DialogItem name={d.name} id={d.id} />);

    let MesssagesElements = messageData.map(m => < Message message={m.message} />);

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