import React from 'react';
import { reduxForm } from 'redux-form';
import { Field } from 'redux-form'; 
import {Input} from '../common/FormControls/FormControls';
import {required} from "../../utils/validators/validators";
import { connect } from 'react-redux';
import {login} from '../../redux/auth-reducer';
import { Redirect } from 'react-router-dom';
import style from "./../../components/common/FormControls/FormControls.module.css";
import {createField} from '../common/FormControls/FormControls';

const LoginForm = ({handleSubmit,error}) => {
    return( 
    <form onSubmit={handleSubmit}>
        {createField("Email","email",[required],Input)}
        {createField("Password","password",[required],Input, {type:"password"})}
        {createField(null,"rememberMe",[],Input, {type:"checkbox"}, "remember me")}
        
        {error && <div className={style.formSummaryError}>
    {error}
        </div>
        }
        <div>
            <button>Login</button>
        </div>
    </form>)   
}
const LoginReduxForm = reduxForm({
    form:'login'
}) (LoginForm)
const Login = (props) => {
    const onSubmit = (formData) =>{
        props.login(formData.email, formData.password, formData.rememberMe);
    }
    if(props.isAuth) {
        return <Redirect to={"/profile"}/>
    }
    return <div>
        <h1>LOGIN</h1>
    <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}
const mapStateToProps = (state) => ({
    isAuth:state.auth.isAuth
 })
export  default connect(mapStateToProps ,{login}) (Login);