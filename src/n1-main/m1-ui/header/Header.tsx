import React from 'react';
import styles from './Header.module.css'
import {NavLink} from 'react-router-dom';

export const Header = () => {
    return (
        <div className={styles.nav}>
            <div className={styles.menu} >
                <div className={styles.item}>
                    <NavLink exact to={'/'} activeClassName={styles.activeLick}>Profile</NavLink>
                </div>
                <div className={styles.item}>
                    <NavLink to={'/login'} activeClassName={styles.activeLick}>Login</NavLink>
                </div>
                <div className={styles.item}>
                    <NavLink to={'/registration'} activeClassName={styles.activeLick}>Registration</NavLink>
                </div>
                <div className={styles.item}>
                    <NavLink to={'/recoverPassword'} activeClassName={styles.activeLick}>RecoverPassword</NavLink>
                </div>
                <div className={styles.item}>
                    <NavLink to={'/newPass'} activeClassName={styles.activeLick}>NewPass</NavLink>
                </div>
            </div>
        </div>
    )
};
