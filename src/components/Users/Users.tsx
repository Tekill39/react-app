import React from 'react';
import userPhoto from '../../assets/img/users.png';
import styles from './users.module.css';
import { NavLink } from 'react-router-dom';
import Paginator from './Paginator';
import User from './User';
import { UsersType } from '../../type/type';

type PropsType = {
    totalUsersCount:number
    pageSize:number
    currentPage:number
    onPageChanged:(pageNumber:number) => void
    users:Array<UsersType>
    followingIsProgress:Array<number>
    unfollow:(userId:number) => void
    follow:(userId:number) => void
}

let Users:React.FC<PropsType> = ({ currentPage, onPageChanged, totalUsersCount, pageSize, users, ...props }) => {

    return <div>

        <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
            totalItemsCount={totalUsersCount}
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