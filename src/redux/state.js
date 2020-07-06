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
      ]
    }
  },
  getState() {
    return this._state;
  },
  _callSubscrible(){
    console.log('State changed');
  },
  addPost() {
    let newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likesCount: 0
    };

    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = '';
    this._callSubscrible(this._state);
  },
  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscrible(this._state);
  },
  subscribe(observer) {
    this._callSubscrible = observer;
  }
}

export default store;
window.store = store;