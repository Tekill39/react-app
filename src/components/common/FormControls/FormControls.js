import React from 'react';
import styles from './../FormControls/FormControls.module.css';
import { Field } from 'redux-form'; 


export const Textarea=({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return(
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
        <div>
            <textarea {...input} {...props}/>          
        </div>
        {hasError && <span>{meta.error}</span>}
        </div>
    )
}
export const Input=({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return(
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
        <div>
            <textarea {...input} {...props}/>          
        </div>
        {hasError && <span>{meta.error}</span>}
        </div>
    )
}
export const createField=( placeholder, name, validators, component,props={}, text="")=>(
    <div>
<Field placeholder={placeholder} component={component}
validate={validators} name={name}
{...props}/>{text}
</div>)