import {getAuthUserData} from './auth-reducer';

const SET_INITIALAIZED = 'SET_INITIALAIZED';

export type initialStateType={
    initialaized:boolean
}
let initialState:initialStateType = {
        initialaized: false       
};
 const appReducer = (state= initialState, action:any):initialStateType => {
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

type initialaizedSuccessActionType = {
    type:typeof SET_INITIALAIZED
}

export const initialaizedSuccess = ():initialaizedSuccessActionType =>({type:SET_INITIALAIZED});

export const initialaizeApp = ()=> (dispatch:any) => {
let promise= dispatch(getAuthUserData());
promise.then(()=>{
    dispatch(initialaizedSuccess());
});

}


export default appReducer;