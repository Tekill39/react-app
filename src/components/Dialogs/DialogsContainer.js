import React from 'react';
import Message from './Message/Message';
import DialogItem from './DialogsItem/DialogsItem';
import { sendMessageCreator, updateNewMessageBodyCreator} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs'
import { connect } from 'react-redux';

let mapStateToProps = (state)=>{
return{
dialogsPage:state.dialogsPage
}
}
let mapDispatchToProps = (dispatch)=>{
   return{
    SendMessage:()=>{
        dispatch(sendMessageCreator());
    },   
    updateNewMessageBody:(body)=>{
        dispatch(updateNewMessageBodyCreator(body));
    }    
   } 
}
const DialogsContainer = connect(mapStateToProps,mapDispatchToProps) (Dialogs);

export default DialogsContainer;