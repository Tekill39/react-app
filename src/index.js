

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {addPost, updateNewPostText} from './redux/state';
import { BrowserRouter } from 'react-router-dom';


let rendererMainThree = (state) =>{
  ReactDOM.render(
  <BrowserRouter>
    <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
  </BrowserRouter>,document.getElementById('root'));
  }
 


rendererMainThree(state);


serviceWorker.unregister();
