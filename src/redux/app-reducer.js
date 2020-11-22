import {authApi} from '../api/api';
import { stopSubmit } from 'redux-form';
import {getAuthUserData} from './../redux/auth-reducer';

const SET_INITIALAIZED = 'SET_INITIALAIZED';


let initialState = {
        initialaized: false       
};
 const appReducer = (state= initialState, action) => {
    switch(action.type){
        case SET_INITIALAIZED:
            return{
                ...state,
                initialaized: true,
                        
            }
       
        default:
            return state;
    }
}

export const initialaizedSuccess  = () => ({type: SET_INITIALAIZED});

export const initialaizeApp = ()=> (dispatch) => {
let promise= dispatch(getAuthUserData());
promise.then(()=>{
    dispatch(initialaizedSuccess());
});

}


export default appReducer;