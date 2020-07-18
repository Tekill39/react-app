import React from 'react';
import Message from './Message/Message';
import DialogItem from './DialogsItem/DialogsItem';
import { sendMessageCreator, updateNewMessageBodyCreator} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs'
import StoreContext from '../../StoreContext';



const DialogsContainer = () => {
    
    return(
    <StoreContext.Consumer>
    {store => {
           
        let onSendMessageClick = () => {
            store.dispatch(sendMessageCreator());
        }
        let onNewMessageChange = (body) => {
            store.dispatch(updateNewMessageBodyCreator(body));
        }
        return <Dialogs updateNewMessageBody={onNewMessageChange} 
               SendMessage={onSendMessageClick} 
               dialogsPage={store.getState().dialogsPage}/>
    }
}
</StoreContext.Consumer>    )

}
export default DialogsContainer;