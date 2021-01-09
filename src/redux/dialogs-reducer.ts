
const SEND_MESSAGE = 'SEND-MESSAGE';

type DialogType = {
id:number
name:string 
}

type MessagesType = {
  id:number
  message:string 
}

let initialState = {
    dialogs: [{
        id: 1,
        name: 'Misha'
      },
      {
        id: 2,
        name: 'Dima'
      },
      {
        id: 3,
        name: 'Masha'
      },
      {
        id: 4,
        name: 'Sasha'
      },
      {
        id: 5,
        name: 'Maxim'
      },
      {
        id: 6,
        name: 'Toma'
      }
    ] as Array<DialogType>,

    message: [{
        id: 1,
        message: 'How are you'
      },
      {
        id: 2,
        message: 'So far, so good'
      },
      {
        id: 3,
        message: 'Hello'
      },
      {
        id: 4,
        message: 'Ok'
      },
      {
        id: 5,
        message: 'Hi'
      },
      {
        id: 6,
        message: 'Do you like react?'
      }
    ] as Array<MessagesType>
};

export type InitialStateType = typeof initialState

const dialogsReducer = (state = initialState, action:any) => {

     switch (action.type) {
                 
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
              ...state,
              message: [...state.message, {id: 6, message: body}]
              
            };
        default:
            return state;
    }
}
type SendMessageCreatorActionType = {
  type: typeof SEND_MESSAGE
  newMessageBody:string
}
export const sendMessageCreator = (newMessageBody:string):SendMessageCreatorActionType => ({
    type: SEND_MESSAGE,newMessageBody
})

export default dialogsReducer;