import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import Profile from './Profile'
import * as axios from 'axios';
import { connect } from 'react-redux';
import {setUserProfile} from '../../redux/profile-reducer'

class ProfileContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/3`).then(response => {
            
            this.props.setUserProfile(response.data);
            
        });
    }

    render() {
        return (
            <Profile {...this.props} />
        )
    }

}
let mapStaetToProps = (state) =>({a:13})

export default connect(mapStaetToProps,{setUserProfile}) (ProfileContainer);