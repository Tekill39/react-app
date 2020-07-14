const UPDATE_NEW_POST_TEXT='UPDATE-NEW-POST-TEXT';
const ADD_POST='ADD-POST';
const UPDATE_NEW_MESSAGE_BODY='UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let store = {
  _state: {
    profilePage: {
      posts: [{
          id: '1',
          message: 'Hi, how are you?',
          likesCount: '21'
        },
        {
          id: '2',
          message: 'Its my first post',
          likesCount: '42'
        }
      ],
      newPostText: 'info.com'
    },

    dialogsPage: {
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
      ],
      newMessageBody:""
    }
  },
  getState() {
    return this._state;
  },
  subscribe(observer){
    this._callSubscrible = observer;
  },
  _callSubscrible() {
    console.log('State changed');
  },
  dispatch(action) {
    if (action.type === ADD_POST) {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscrible(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {

      this._state.profilePage.newPostText = action.newText;
      this._callSubscrible(this._state);
    }
    else if(action.type === UPDATE_NEW_MESSAGE_BODY){
      this._state.dialogsPage.newMessageBody = action.body;
      this._callSubscrible(this._state);
    }
    else if(action.type === SEND_MESSAGE){
      let body =this._state.dialogsPage.newMessageBody;
      this._state.dialogsPage.newMessageBody = '';
      this._state.dialogsPage.message.push({id:6, message:body});
      this._callSubscrible(this._state);
    }
  }
}
export const addPostActionCreator = () => ({type: ADD_POST})

export const updateoNewPostTextActionCreator = (text) => ({
  
      type: UPDATE_NEW_POST_TEXT, newText:text
  })
  export const sendMessageCreator = () => ({type: SEND_MESSAGE})
  export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body:body})



export default store;
window.store = store;