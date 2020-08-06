import React from 'react';
import { connect } from 'react-redux';
import { follow, unfollow, setCurrentPage,
          toggleFollovingProgress,getUsers } from '../../redux/users-reducer';
import Users from "./Users";
import * as axios from 'axios';
import Preloader from '../../components/common/preloader/preloader';
import {usersApi} from '../../api/api'


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
        // this.props.toggleIsFetching(true);

        // usersApi.getUsers(this.props.currentPage, this.props.pageSize)
        // .then(data => {
        //     this.props.toggleIsFetching(false);
        //     this.props.setUsers(data.items);
        //     this.props.setTotalUsersCount(data.totalCount);
        // });
    }
    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);        
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
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingIsProgress:state.usersPage.followingIsProgress
    }
}

export default connect(mapStateToProps, {
    follow,unfollow,
    setCurrentPage,  
    toggleFollovingProgress,
    getUsers})(UsersContainer);