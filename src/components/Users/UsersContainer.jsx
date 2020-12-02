import React from 'react';
import { connect } from 'react-redux';
import { follow, unfollow, setCurrentPage,
          toggleFollovingProgress,getUsers } from '../../redux/users-reducer';
import Users from "./Users";
import * as axios from 'axios';
import Preloader from '../../components/common/preloader/preloader';
import {usersApi} from '../../api/api';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { getPageSize, getTotalUsersCount,requireUsers,getCurrentPage,getIsFetching,getFollowingIsProgress } from '../../redux/users-selector';



class UsersContainer extends React.Component {

    componentDidMount() {
    const {currentPage,pageSize}=this.props;    
        this.props.getUsers(currentPage,pageSize);
   }
    onPageChanged = (pageNumber) => {
        const {pageSize} = this.props;
        this.props.getUsers(pageNumber, pageSize);        
    }

    render() {

        return <>
            {this.props.isFetching ? 
            <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                followingIsProgress={this.props.followingIsProgress}
            />
        </>
    }
}


let mapStateToProps = (state) => {
    return {
        users: requireUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingIsProgress:getFollowingIsProgress(state)
    }
}

    export default compose(
        withAuthRedirect,
        connect(mapStateToProps, {
            follow,unfollow,
            setCurrentPage,  
            toggleFollovingProgress,
            getUsers})
    ) (UsersContainer);