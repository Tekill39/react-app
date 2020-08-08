import React from 'react';
import Message from './Message/Message';
import DialogItem from './DialogsItem/DialogsItem';
import { sendMessageCreator, updateNewMessageBodyCreator} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs'
import { connect } from 'react-redux';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';

let mapStateToProps = (state)=>{
return{
dialogsPage:state.dialogsPage,
isAuth:state.auth.isAuth
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
let AuthredirectComponent=withAuthRedirect(Dialogs);

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps) (AuthredirectComponent);

export default DialogsContainer;