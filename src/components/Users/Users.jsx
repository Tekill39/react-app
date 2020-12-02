import React from 'react';
import userPhoto from '../../assets/img/users.png';
import styles from './users.module.css';
import { NavLink } from 'react-router-dom';
import Paginator from './Paginator';
import User from './User';

let Users = ({currentPage, onPageChanged, totalUsersCount, pageSize,users,  ...props}) => {

    return <div>

        <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
            totalUsersCount={totalUsersCount}
            pageSize={pageSize} />
            <div>
        {
            users.map(u => <User user={u} key={u.id}
                followingIsProgress={props.followingIsProgress}
                unfollow={props.unfollow}
                follow={props.follow}
                />)                                
        }
    </div >
    </div>
}

export default Users;