
import*as serviceWorker from './serviceWorker';  
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/state';
import { BrowserRouter } from 'react-router-dom';


let rendererMainThree = (state) =>{
  debugger;
  ReactDOM.render(
  <BrowserRouter>
    <App state={state} dispatch={store.dispatch.bind(store)} store={store}/>
  </BrowserRouter>,document.getElementById('root'));
  }

rendererMainThree(store.getState());
store.subscribe(rendererMainThree);


serviceWorker.unregister();
