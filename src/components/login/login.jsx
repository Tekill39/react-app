import React from 'react';
import { reduxForm } from 'redux-form';
import { Field } from 'redux-form'; 
import {Input} from '../common/FormControls/FormControls';
import {required} from "../../utils/validators/validators";
import { connect } from 'react-redux';
import {login} from '../../redux/auth-reducer';
import { Redirect } from 'react-router-dom';
import style from "./../../components/common/FormControls/FormControls.module.css";

const LoginForm = (props) => {
    return( 
    <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder={"Email"} component={Input}
            validate={[required]} name={"email"}/>
        </div>
        <div>
        <Field placeholder={"Password"} component={Input} type={"password"} 
        validate={[required]} name={"password"}/>
        </div>
        <div>
        <Field component={Input}  name={"rememberMe"} type={"checkbox"} />remember me
        </div>
        {props.error && <div className={style.formSummaryError}>
    {props.error}
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