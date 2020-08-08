import React from 'react';
import Profile from './Profile'
import * as axios from 'axios';
import { connect } from 'react-redux';
import {getUserProfile} from '../../redux/profile-reducer';
import {withRouter} from 'react-router-dom';
import {Redirect} from 'react-router-dom'; 
// import {usersApi} from '../../api/api';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';

class ProfileContainer extends React.Component {
    

    componentDidMount() {
      
        let userId = this.props.match.params.userId;
        if(!userId){
            userId=2;
        }
        this.props.getUserProfile(userId);
              
    }

    render() {
        
        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }
}
let AuthredirectComponent = withAuthRedirect(ProfileContainer);

let mapStateToProps = (state) =>({profile:state.profilePage.profile,
isAuth:state.auth.isAuth});


let WithUrlDataContainerComponent = withRouter(AuthredirectComponent);

export default connect(mapStateToProps,{getUserProfile}) (WithUrlDataContainerComponent);