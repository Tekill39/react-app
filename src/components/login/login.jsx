import React from 'react';
import { reduxForm } from 'redux-form';
import { Field } from 'redux-form'; 
import {Input} from '../common/FormControls/FormControls';
import {required} from "../../utils/validators/validators";
import { connect } from 'react-redux';
import {login} from '../../redux/auth-reducer';

const LoginForm = (props) => {
    return( 
    <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder={"Email"} component={Input}
            validate={[required]} name={"email"}/>
        </div>
        <div>
        <Field placeholder={"Password"} component={Input} 
        validate={[required]} name={"password"}/>
        </div>
        <div>
        <Field type={"checkbox"} component={Input} validate={[required]} 
        name={"rememberMe"}/>remember me
        </div>
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
    return <div>
        <h1>LOGIN</h1>
    <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}
export  default connect(null,{login}) (Login);