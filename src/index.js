
import*as serviceWorker from './serviceWorker';  
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state, { subscribe } from './redux/state';

import {addPost, updateNewPostText} from './redux/state';
import { BrowserRouter } from 'react-router-dom';


let rendererMainThree = (state) =>{
  ReactDOM.render(
  <BrowserRouter>
    <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
  </BrowserRouter>,document.getElementById('root'));
  }
 


rendererMainThree(state);
subscribe(rendererMainThree);


serviceWorker.unregister();
