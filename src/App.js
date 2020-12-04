import React from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import {Route} from "react-router-dom";
import UsersContainer from './components/Users/UsersContainer';
import LoginPage from './components/login/login';
import { connect } from 'react-redux';
import { compose } from 'redux';
import {withRouter} from 'react-router-dom';
import {initialaizeApp} from './redux/app-reducer';
import {withSuspense} from './hoc/withSuspense';


// import DialogsContainer from './components/Dialogs/DialogsContainer';
// import ProfileContainer from './components/Profile/ProfileContainer';
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

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
         <Route path='/profile/:userId?' render = {withSuspense(ProfileContainer)} /> 
         <Route path='/dialogs' render = { withSuspense(DialogsContainer)} />
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
