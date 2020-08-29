import React from 'react';
import { reduxForm } from 'redux-form';
import { Field } from 'redux-form'; 

const LoginForm = (props) => {
    return( 
    <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder={"Login"} component={"input"} name={"login"}/>
        </div>
        <div>
        <Field placeholder={"Pass"} component={"input"} name={"pass"}/>
        </div>
        <div>
        <Field type={"checkbox"} component={"input"} name={"rememberMe"}/>remember me
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
        console.log(formData);
    }
    return <div>
        <h1>LOGIN</h1>
    <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}
export  default Login;