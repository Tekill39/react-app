import {
    usersApi
} from '../api/api'
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';



let initialState = {
    users: [],
    totalUsersCount: 0,
    pageSize: 10,
    currentPage: 1,
    isFetching: true,
    followingIsProgress: []
};
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {
                            ...u,
                            followed: true
                        }
                    }
                    return u;
                })
            }
            case UNFOLLOW:
                return {
                    ...state,
                    users: state.users.map(u => {
                        if (u.id === action.userId) {
                            return {
                                ...u,
                                followed: false
                            }
                        }
                        return u;
                    })
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

export const followSuccess = (userId) => ({
    type: FOLLOW,
    userId
})
export const unfollowSuccess = (userId) => ({
    type: UNFOLLOW,
    userId
})
export const setUsers = (users) => ({
    type: SET_USERS,
    users
})
export const setCurrentPage = (currentPage) => ({
    type: SET_CURRENT_PAGE,
    currentPage
})
export const setTotalUsersCount = (totalUsersCount) => ({
    type: SET_TOTAL_USERS_COUNT,
    count: totalUsersCount
})
export const toggleIsFetching = (isFetching) => ({
    type: TOGGLE_IS_FETCHING,
    isFetching: isFetching
})
export const toggleFollovingProgress = (isFetching, userId) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching: isFetching,
    userId
})

export const getUsers = (currentPage, pageSize) => {

    return async (dispatch) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(currentPage));

        let data = await usersApi.getUsers(currentPage, pageSize);
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
    }
}
export const FollowUnflowFlow = async (dispatch, userId, ApiMethod, ActionCreator) => {
dispatch(toggleFollovingProgress(true, userId));
let response = await ApiMethod(userId);

if (response.data.resultCode == 0) {
    dispatch(ActionCreator(userId));
}
dispatch(toggleFollovingProgress(false, userId));
}

export const follow = (userId) => {
    return async (dispatch) => {

        FollowUnflowFlow(dispatch, userId, usersApi.follow.bind(usersApi),followSuccess);

        dispatch(toggleFollovingProgress(true, userId));
       
    }
}

export const unfollow = (userId) => {
    return async (dispatch) => {

        FollowUnflowFlow(dispatch, userId, usersApi.unfollow.bind(usersApi),unfollowSuccess);

        dispatch(toggleFollovingProgress(true, userId));
           
    }
}
export default usersReducer;