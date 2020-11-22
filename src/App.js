import React from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import {Route} from "react-router-dom";
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import LoginPage from './components/login/login';
import { connect } from 'react-redux';
import { compose } from 'redux';
import {withRouter} from 'react-router-dom';
import {initialaizeApp} from './redux/app-reducer';

class App extends React.Component {  
  componentDidMount() {
    this.props.initialaizeApp();
    }
  render(){
  return (    
    <div className = 'app-wrapper' >
      <HeaderContainer/>
      <Navbar />
      <div className='app-wrapper-content'>
         <Route path='/profile/:userId?' render = { ()=> <ProfileContainer /> } /> 
         <Route path='/dialogs' render = { ()=> <DialogsContainer/>} />
         <Route path='/users' render = { ()=> <UsersContainer/>} />      
         <Route path='/login' render = { ()=> <LoginPage/>} />                  
      </div>
    </div>
  )
  }
}
  
    
export default compose(
  withRouter,
  connect(null, {initialaizeApp})) (App);
