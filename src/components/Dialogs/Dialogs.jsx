import React from 'react';
import classes from './Dialogs.module.css'

const  Dialogs = (props) => {
    return(
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                <div className={classes.dialog}>Misha</div>
                <div className={classes.dialog}>Dima</div>
                <div className={classes.dialog}>Toma</div>
                <div className={classes.dialog}>Masha</div>
                <div className={classes.dialog}>Sasha</div>
                <div className={classes.dialog}>Maxim</div>
            </div>
            <div className="messages">
                <div className={classes.message}>Hi</div>
                <div className={classes.message}>Ok</div>
                <div className={classes.message}>How are you?</div>
                <div className={classes.message}>So far, so good!</div>
                <div className={classes.message}>Do you walk every day?</div>
                <div className={classes.message}>Yes, I do.</div>
            </div>
        </div>
    );
}
export default Dialogs;
