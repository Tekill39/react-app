import React from 'react';
import Profile from './Profile'
import { connect } from 'react-redux';
import { getUserProfile, getStatus, updateStatus, savePhoto, safeProfile } from '../../redux/profile-reducer';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';

class ProfileContainer extends React.Component {


    refreshProile() {

        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
            if (!userId) this.props.history.push('/login');
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }

    componentDidMount() {
        
        this.refreshProile();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId != prevProps.match.params.userId) {
            this.refreshProile();
        }
    }

    render() {
        return (
            <Profile isOwner={!this.props.match.params.userId} {...this.props} profile={this.props.profile}
                status={this.props.status}
                updateStatus={this.props.updateStatus}
                savePhoto={this.props.savePhoto} />
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth

});


export default compose(
    connect(mapStateToProps, { getUserProfile, getStatus, updateStatus, savePhoto, safeProfile }),
    withRouter)(ProfileContainer);