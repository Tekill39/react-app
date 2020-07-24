const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';
let initialState = {
    dialogs: [{
        id: '1',
        name: 'Misha'
      },
      {
        id: '2',
        name: 'Dima'
      },
      {
        id: '3',
        name: 'Masha'
      },
      {
        id: '4',
        name: 'Sasha'
      },
      {
        id: '5',
        name: 'Maxim'
      },
      {
        id: '6',
        name: 'Toma'
      }
    ],

    message: [{
        id: '1',
        message: 'How are you'
      },
      {
        id: '2',
        message: 'So far, so good'
      },
      {
        id: '3',
        message: 'Hello'
      },
      {
        id: '4',
        message: 'Ok'
      },
      {
        id: '5',
        message: 'Hi'
      },
      {
        id: '6',
        message: 'Do you like react?'
      }
    ]
};

const dialogsReducer = (state = initialState, action) => {

     switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
          return{
            ...state,
            newMessageBody: action.body
          }
         
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
              ...state,
              newMessageBody : '',
              message: [...state.message, {id: 6, message: body}]
            };
                  default:
            return state;
    }
}
export const sendMessageCreator = () => ({
    type: SEND_MESSAGE
})
export const updateNewMessageBodyCreator = (body) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body
})

export default dialogsReducer;