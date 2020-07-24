
import*as serviceWorker from './serviceWorker';  
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/redux-store';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux'


let rendererMainThree = (state) =>{
  
  ReactDOM.render(
  <BrowserRouter>
  <Provider store = {store}>
    <App state={state} dispatch={store.dispatch.bind(store)} store={store}/>
  </Provider>  
  </BrowserRouter>,document.getElementById('root'));
  }

rendererMainThree(store.getState());
store.subscribe( ()=> {
  let state = store.getState();
  rendererMainThree(state);
});


serviceWorker.unregister();
