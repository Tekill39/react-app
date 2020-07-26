import React from 'react';
import classes from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.new}>
                <NavLink to = '/profile' activeClassName={classes.activeLink}>Profile</NavLink>
            </div>
            <div className={classes.new}>
                <NavLink to = '/dialogs' activeClassName={classes.activeLink}>Messages</NavLink>
            </div>
            <div className={classes.new}>
                <NavLink to = '/users' activeClassName={classes.activeLink}>Users</NavLink>
            </div>
            <div className={classes.new}>
                <a>News</a>
            </div>
            <div className={classes.new}>
                <a>Music</a>
            </div>
            <div className={classes.new}>
                <a>Settings</a>
            </div>
        </nav>
    );
}
export default Navbar;