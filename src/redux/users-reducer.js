const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS ='SET_USERS';


let initialState = {
        users: [
         {id: '1',photoUrl:'https://thumbs.dreamstime.com/b/o%C3%B1%20%C3%B0%C2%BDo%C3%B0%C2%B2%C3%B0%C2%B0%C3%B1%E2%80%9A%C3%B0%C2%B5%C3%B0%C2%BB%C3%B1%C5%93-%C3%B0%C2%BC%C3%B0%C2%B0%C3%B1%E2%82%AC%C3%B0%C2%BA-zuckerberg-%C3%B1%20%C3%B1%E2%80%9Ao%C3%B1%E2%82%ACo%C3%B0%C2%BD%C3%B1%E2%80%B9-%C3%B0%C2%B8%C3%B0%C2%BB%C3%B0%C2%BB%C3%B1%C5%BE%C3%B1%20%C3%B1%E2%80%9A%C3%B1%E2%82%AC%C3%B0%C2%B0%C3%B1%E2%80%A0%C3%B0%C2%B8%C3%B0%C2%B8-facebook-inc-%C3%B0%C2%B8%C3%B0%C2%B7o%C3%B0%C2%BB%C3%B0%C2%B8%C3%B1%E2%82%ACo%C3%B0%C2%B2%C3%B0%C2%B0%C3%B0%C2%BD%C3%B0%C2%BDo%C3%B0%C2%B9-136143682.jpg',
         followed:true, fullname: 'Mike', status: 'Superman', location:{city:'Moscow', country:'Russia'} },
         {id: '2', photoUrl:'https://thumbs.dreamstime.com/b/o%C3%B1%20%C3%B0%C2%BDo%C3%B0%C2%B2%C3%B0%C2%B0%C3%B1%E2%80%9A%C3%B0%C2%B5%C3%B0%C2%BB%C3%B1%C5%93-%C3%B0%C2%BC%C3%B0%C2%B0%C3%B1%E2%82%AC%C3%B0%C2%BA-zuckerberg-%C3%B1%20%C3%B1%E2%80%9Ao%C3%B1%E2%82%ACo%C3%B0%C2%BD%C3%B1%E2%80%B9-%C3%B0%C2%B8%C3%B0%C2%BB%C3%B0%C2%BB%C3%B1%C5%BE%C3%B1%20%C3%B1%E2%80%9A%C3%B1%E2%82%AC%C3%B0%C2%B0%C3%B1%E2%80%A0%C3%B0%C2%B8%C3%B0%C2%B8-facebook-inc-%C3%B0%C2%B8%C3%B0%C2%B7o%C3%B0%C2%BB%C3%B0%C2%B8%C3%B1%E2%82%ACo%C3%B0%C2%B2%C3%B0%C2%B0%C3%B0%C2%BD%C3%B0%C2%BDo%C3%B0%C2%B9-136143682.jpg',
          followed:false,fullname: 'Toma', status: 'Supergirl', location:{city:'Moscow', country:'Russia'} },   
        {id: '3', photoUrl: 'https://thumbs.dreamstime.com/b/o%C3%B1%20%C3%B0%C2%BDo%C3%B0%C2%B2%C3%B0%C2%B0%C3%B1%E2%80%9A%C3%B0%C2%B5%C3%B0%C2%BB%C3%B1%C5%93-%C3%B0%C2%BC%C3%B0%C2%B0%C3%B1%E2%82%AC%C3%B0%C2%BA-zuckerberg-%C3%B1%20%C3%B1%E2%80%9Ao%C3%B1%E2%82%ACo%C3%B0%C2%BD%C3%B1%E2%80%B9-%C3%B0%C2%B8%C3%B0%C2%BB%C3%B0%C2%BB%C3%B1%C5%BE%C3%B1%20%C3%B1%E2%80%9A%C3%B1%E2%82%AC%C3%B0%C2%B0%C3%B1%E2%80%A0%C3%B0%C2%B8%C3%B0%C2%B8-facebook-inc-%C3%B0%C2%B8%C3%B0%C2%B7o%C3%B0%C2%BB%C3%B0%C2%B8%C3%B1%E2%82%ACo%C3%B0%C2%B2%C3%B0%C2%B0%C3%B0%C2%BD%C3%B0%C2%BDo%C3%B0%C2%B9-136143682.jpg',
         followed:true, fullname: 'Dima', status: 'Manager', location:{city:'Ivanovo', country:'Russia'} },
    ]
};
 const usersReducer = (state= initialState, action) => {
    switch(action.type){
        case FOLLOW:
            return{
                ...state,
                users:state.users.map( u => {
                    if (u.id === action.userId) {
                    return {...u, followed:true}                
            }
            return u;
        })
    }
        case UNFOLLOW:
            return{
                    ...state,
                    users:state.users.map(u =>{
                        if (u.id === action.userId)
                    {
                        return {...u, followed:false}                
                }  
                return u;
            })
        }
        case SET_USERS:{
            return {...state, users:[...state.users, ...action.users]
            }
        }
        
        default:
            return state;
    }
}

export const followAC = (userId) => ({type: FOLLOW, userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW,userId})
export const setUsersAC = (users) => ({type: SET_USERS,users})

export default usersReducer;