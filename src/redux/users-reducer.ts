import { UsersType } from './../type/type';
import { usersApi} from '../api/api';
import updateObjectInArray from '../utils/validators/object-helpers';
// import cn from "classnames";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';


let initialState = {
    users: [] as Array<UsersType> ,
    totalUsersCount: 0,
    pageSize: 15,
    currentPage: 1,
    isFetching: true,
    followingIsProgress: [] as Array<number> //Array of users id
};

type InitialStateType = typeof initialState;

const usersReducer = (state = initialState, action:any):InitialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users:updateObjectInArray(state.users, action.userId, "id", {followed: true})
            }
            case UNFOLLOW:
                return {
                    ...state,
                    users:updateObjectInArray(state.users, action.userId, "id", {followed: false})
                }
                case SET_USERS: {
                    return {
                        ...state,
                        users: action.users
                    }
                }
                case SET_CURRENT_PAGE: {
                    return {
                        ...state,
                        currentPage: action.currentPage
                    }
                }
                case SET_TOTAL_USERS_COUNT: {
                    return {
                        ...state,
                        totalUsersCount: action.count
                    }
                }
                case TOGGLE_IS_FETCHING: {

                    return {
                        ...state,
                        isFetching: action.isFetching
                    }
                }
                case TOGGLE_IS_FOLLOWING_PROGRESS: {

                    return {
                        ...state,
                        followingIsProgress: action.isFetching ? [...state.followingIsProgress, action.userId] : state.followingIsProgress.filter(id => id != action.userId)
                    }
                }
                default:
                    return state;
    }
}
type FollowSuccessActionType = {
    type: typeof FOLLOW
    userId:number
}
export const followSuccess = (userId:number):FollowSuccessActionType => ({
    type: FOLLOW,
    userId
})
type UnollowSuccessActionType = {
    type: typeof UNFOLLOW
    userId:number
}
export const unfollowSuccess = (userId:number):UnollowSuccessActionType => ({
    type: UNFOLLOW,
    userId
})

type SetUsersActionType ={
    type: typeof SET_USERS,
    users: Array<UsersType>
}
export const setUsers = (users:Array<UsersType>):SetUsersActionType => ({
    type: SET_USERS,
    users
})
type SetCurrentPageActionType ={
    type: typeof SET_CURRENT_PAGE,
    currentPage:number
}
export const setCurrentPage = (currentPage:number):SetCurrentPageActionType => ({
    type: SET_CURRENT_PAGE,
    currentPage
})

type SetTotalUsersCountActionType ={
    type: typeof SET_TOTAL_USERS_COUNT,
    count:number
}
export const setTotalUsersCount = (totalUsersCount:number):SetTotalUsersCountActionType => ({
    type: SET_TOTAL_USERS_COUNT,
    count: totalUsersCount
})

type ToggleIsFetchingActionType ={
    type: typeof TOGGLE_IS_FETCHING,
    isFetching:boolean
}
export const toggleIsFetching = (isFetching:boolean):ToggleIsFetchingActionType => ({
    type: TOGGLE_IS_FETCHING,
    isFetching: isFetching
})
export const toggleFollovingProgress = (isFetching:boolean, userId:number) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching: isFetching,
    userId
})

export const getUsers = (currentPage:number, pageSize:number) => {

    return async (dispatch:any) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(currentPage));

        let data = await usersApi.getUsers(currentPage, pageSize);
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
    }
}
export const FollowUnflowFlow = async (dispatch:any, userId:number, ApiMethod:any, ActionCreator:any) => {
dispatch(toggleFollovingProgress(true, userId));
let response = await ApiMethod(userId);

if (response.data.resultCode == 0) {
    dispatch(ActionCreator(userId));
}
dispatch(toggleFollovingProgress(false, userId));
}

export const follow = (userId:number) => {
    return async (dispatch:any) => {

        FollowUnflowFlow(dispatch, userId, usersApi.follow.bind(usersApi),followSuccess);

        dispatch(toggleFollovingProgress(true, userId));
       
    }
}

export const unfollow = (userId:number) => {
    return async (dispatch:any) => {

        FollowUnflowFlow(dispatch, userId, usersApi.unfollow.bind(usersApi),unfollowSuccess);

        dispatch(toggleFollovingProgress(true, userId));
           
    }
}
export default usersReducer;