import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import Profile from './Profile'

class ProfileContainer extends React.Component{
render(){
    return (
        <Profile {...this.props}/>
    )
}
    
}

export default ProfileContainer;