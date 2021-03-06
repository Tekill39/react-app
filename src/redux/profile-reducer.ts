
import { stopSubmit } from 'redux-form';
import { ProfileApi } from '../api/api';
import {PhotosType,ContactsType,ProfileType,PostType} from './../../src/type/type'

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const SET_PHOTO_SUCCESS = 'SET_PHOTO_SUCCESS';



let initialState = {
    posts: [{
        id: 1,
        message: 'Hi, how are you?',
        likesCount: 21
    },
    {
        id: 2,
        message: 'Its my first post',
        likesCount: 42
    }
    ] as Array<PostType>,
    profile: null as ProfileType | null,
    status: '',
    newPostText:''
};

export type InitialStateType = typeof initialState;
const profileReducer = (state = initialState, action:any):InitialStateType => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: action.newPostText,
                likesCount: 0
            };
            let stateCopy = {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
            return stateCopy;
        }

        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case SET_PHOTO_SUCCESS: {
            return {
                ...state, profile: { ...state.profile, photos: action.photos } as ProfileType
            }
        }
        default:
            return state;
    }
}

type AddPostActionCreatorActionType = {
    type: typeof ADD_POST
    newPostText:string
}
export const addPostActionCreator = (newPostText:string):AddPostActionCreatorActionType=> ({
    type: ADD_POST,
    newPostText
})

type SetUserProfileActionType = {
    type: typeof SET_USER_PROFILE
    profile:ProfileType
}
export const setUserProfile = (profile:ProfileType):SetUserProfileActionType => ({

    type: SET_USER_PROFILE,
    profile
})

type SetStatusActionType = {
    type: typeof SET_STATUS
    status:string
}
export const setStatus = (status:string):SetStatusActionType => ({
    type: SET_STATUS,
    status
})
type SavePhotoSuccessActionType = {
    type: typeof SET_PHOTO_SUCCESS
    photos:PhotosType
}
export const savePhotoSuccess = (photos:PhotosType):SavePhotoSuccessActionType => ({
    type: SET_PHOTO_SUCCESS,
    photos
})
export const getUserProfile = (userId:number) => async (dispatch:any) => {
    let response = await ProfileApi.getProfile(userId)
    dispatch(setUserProfile(response.data));
}
export const getStatus = (userId:number) => async (dispatch:any) => {
    let response = await ProfileApi.getStatus(userId);
    dispatch(setStatus(response.data));
}
export const updateStatus = (status:string) => async (dispatch:any) => {
    let response = await ProfileApi.updateStatus(status)

    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
}
export const savePhoto = (file:any) => async (dispatch:any) => {
    debugger
    let response = await ProfileApi.savePhoto(file)

    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
    }
}
export const safeProfile = (profile:ProfileType) => async (dispatch:any, getState:any) => {
    const userId = getState().auth.userId;
    const response = await ProfileApi.safeProfile(profile);
    if (response.data.resultCode === 0) {
        dispatch(getUserProfile(userId));
    }
    else {
        dispatch(stopSubmit("edit-profile", { _error: response.data.messages[0] }));
    }
}
export default profileReducer;