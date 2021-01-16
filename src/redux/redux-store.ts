import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import dialogsReducer from "./dialogs-reducer";
import {createStore, combineReducers, applyMiddleware} from 'redux';
import userReducer from "./users-reducer";
import authReducer from './auth-reducer';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import {compose } from 'redux';

let rootReducer = combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer,
    sidebar:sidebarReducer,
    usersPage:userReducer,
    auth:authReducer,
    form:formReducer 
});

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>

//@ts-ignore
 const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 //@ts-ignore
 const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store