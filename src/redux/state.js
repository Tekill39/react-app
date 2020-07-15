import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import dialogsReducer from "./dialogs-reducer";


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
      newMessageBody: ""
    }
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscrible = observer;
  },
  _callSubscrible() {
    console.log('State changed');
  },
  dispatch(action) {

    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);
    this._callSubscrible(this._state);
  }
}





export default store;
window.store = store;