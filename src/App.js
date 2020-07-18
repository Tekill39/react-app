import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {Route, BrowserRouter} from "react-router-dom";
import DialogsContainer from './components/Dialogs/DialogsContainer';


const App = (props) => {
  
  return (
    <BrowserRouter>
    <div className = 'app-wrapper' >
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
       <Route path='/profile' render = { ()=> <Profile/> } /> 
       <Route path='/dialogs' render = { ()=> <DialogsContainer/>} />              
      </div>
    </div>
    </BrowserRouter>);
    }

export default App;
