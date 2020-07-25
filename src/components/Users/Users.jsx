import React from 'react';
import styles from './users.module.css';

let Users = (props) => {
if  (props.users.length===0){
    props.setUsers([
        {id: '1',photoUrl:'https://thumbs.dreamstime.com/b/o%C3%B1%20%C3%B0%C2%BDo%C3%B0%C2%B2%C3%B0%C2%B0%C3%B1%E2%80%9A%C3%B0%C2%B5%C3%B0%C2%BB%C3%B1%C5%93-%C3%B0%C2%BC%C3%B0%C2%B0%C3%B1%E2%82%AC%C3%B0%C2%BA-zuckerberg-%C3%B1%20%C3%B1%E2%80%9Ao%C3%B1%E2%82%ACo%C3%B0%C2%BD%C3%B1%E2%80%B9-%C3%B0%C2%B8%C3%B0%C2%BB%C3%B0%C2%BB%C3%B1%C5%BE%C3%B1%20%C3%B1%E2%80%9A%C3%B1%E2%82%AC%C3%B0%C2%B0%C3%B1%E2%80%A0%C3%B0%C2%B8%C3%B0%C2%B8-facebook-inc-%C3%B0%C2%B8%C3%B0%C2%B7o%C3%B0%C2%BB%C3%B0%C2%B8%C3%B1%E2%82%ACo%C3%B0%C2%B2%C3%B0%C2%B0%C3%B0%C2%BD%C3%B0%C2%BDo%C3%B0%C2%B9-136143682.jpg',
        followed:true, fullname: 'Mike', status: 'Superman', location:{city:'Moscow', country:'Russia'} },
        {id: '2', photoUrl:'https://thumbs.dreamstime.com/b/o%C3%B1%20%C3%B0%C2%BDo%C3%B0%C2%B2%C3%B0%C2%B0%C3%B1%E2%80%9A%C3%B0%C2%B5%C3%B0%C2%BB%C3%B1%C5%93-%C3%B0%C2%BC%C3%B0%C2%B0%C3%B1%E2%82%AC%C3%B0%C2%BA-zuckerberg-%C3%B1%20%C3%B1%E2%80%9Ao%C3%B1%E2%82%ACo%C3%B0%C2%BD%C3%B1%E2%80%B9-%C3%B0%C2%B8%C3%B0%C2%BB%C3%B0%C2%BB%C3%B1%C5%BE%C3%B1%20%C3%B1%E2%80%9A%C3%B1%E2%82%AC%C3%B0%C2%B0%C3%B1%E2%80%A0%C3%B0%C2%B8%C3%B0%C2%B8-facebook-inc-%C3%B0%C2%B8%C3%B0%C2%B7o%C3%B0%C2%BB%C3%B0%C2%B8%C3%B1%E2%82%ACo%C3%B0%C2%B2%C3%B0%C2%B0%C3%B0%C2%BD%C3%B0%C2%BDo%C3%B0%C2%B9-136143682.jpg',
         followed:false,fullname: 'Toma', status: 'Supergirl', location:{city:'Moscow', country:'Russia'} },   
       {id: '3', photoUrl: 'https://thumbs.dreamstime.com/b/o%C3%B1%20%C3%B0%C2%BDo%C3%B0%C2%B2%C3%B0%C2%B0%C3%B1%E2%80%9A%C3%B0%C2%B5%C3%B0%C2%BB%C3%B1%C5%93-%C3%B0%C2%BC%C3%B0%C2%B0%C3%B1%E2%82%AC%C3%B0%C2%BA-zuckerberg-%C3%B1%20%C3%B1%E2%80%9Ao%C3%B1%E2%82%ACo%C3%B0%C2%BD%C3%B1%E2%80%B9-%C3%B0%C2%B8%C3%B0%C2%BB%C3%B0%C2%BB%C3%B1%C5%BE%C3%B1%20%C3%B1%E2%80%9A%C3%B1%E2%82%AC%C3%B0%C2%B0%C3%B1%E2%80%A0%C3%B0%C2%B8%C3%B0%C2%B8-facebook-inc-%C3%B0%C2%B8%C3%B0%C2%B7o%C3%B0%C2%BB%C3%B0%C2%B8%C3%B1%E2%82%ACo%C3%B0%C2%B2%C3%B0%C2%B0%C3%B0%C2%BD%C3%B0%C2%BDo%C3%B0%C2%B9-136143682.jpg',
        followed:true, fullname: 'Dima', status: 'Manager', location:{city:'Ivanovo', country:'Russia'} },
   ])
}
    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={styles.userPhoto} />
                    </div>
                    <div>
                        {u.followed ? <button onClick={()=>{props.unfollow(u.id)}}>Unfollow</button> : 
                        <button onClick={()=>{props.follow(u.id)}}>follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}
export default Users;