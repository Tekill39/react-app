let state = {
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
    ]
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
}
export let addPost = (postMessage) => {
  let newPost = {
    id: 5,
    message: postMessage,
    likesCount: 0
  };

  state.profilePage.posts.push(newPost);
}


export default state;