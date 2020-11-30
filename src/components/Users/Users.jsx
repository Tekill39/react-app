import React from 'react';
import userPhoto from '../../assets/img/users.png';
import styles from './users.module.css';
import { NavLink } from 'react-router-dom';
import Paginator from './Paginator';

let Users = ({currentPage, onPageChanged, totalUsersCount, pageSize,users,  ...props}) => {

    return <div>

        <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
            totalUsersCount={totalUsersCount}
            pageSize={pageSize} />
        {
            users.map(u => <div key={u.id}>
                <span>

                    <div>
                        <NavLink to={'profile' + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto} />
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button disabled={props.followingIsProgress.some(id => id === u.id)} onClick={() => { props.unfollow(u.id) }}>
                                Unfollow</button>
                            : <button disabled={props.followingIsProgress.some(id => id === u.id)} onClick={() => { props.follow(u.id) }}
                            >Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>
            </div>)
        }
    </div >
}

export default Users;