import React from 'react';
import { connect } from 'react-redux';
import { follow, unfollow, setCurrentPage,
          toggleFollovingProgress,getUsers } from '../../redux/users-reducer';
import {AppStateType} from '../../redux/redux-store';
import Users from "./Users";
import Preloader from '../../components/common/preloader/preloader';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { getPageSize, getTotalUsersCount,requireUsers,getCurrentPage,getIsFetching,getFollowingIsProgress } from '../../redux/users-selector';
import { UsersType } from '../../type/type';


type MapStatePropsType = {
    currentPage:number
    pageSize:number
    isFetching:boolean
    totalUsersCount:number
    users:Array<UsersType>
    followingIsProgress:Array<number>
}
type MapDispatchPropsType = {
    follow:(userId:number)=>void
    unfollow:(userId:number)=>void
    getUsers:(currentPage:number,pageSize:number)=>void
    
}
type OwnPropsType = {
    pageTitle:string
}
type PropsType = MapDispatchPropsType & OwnPropsType & MapStatePropsType

class UsersContainer extends React.Component<PropsType> {

    componentDidMount() {
    const {currentPage,pageSize}=this.props;    
        this.props.getUsers(currentPage,pageSize);
   }
    onPageChanged = (pageNumber:number) => {
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


let mapStateToProps = (state:AppStateType):MapStatePropsType => {
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