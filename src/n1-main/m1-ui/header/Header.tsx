import React from 'react';
import styles from './Header.module.css'
import {NavLink} from 'react-router-dom';
import {LOGIN, NEW_PASS, PROFILE, RECOVER_PASSWORD, REGISTRATION} from '../routes/Routes';

export const Header = () => {
    return (
        <div className={styles.nav}>
            <div className={styles.menu} >
                <div className={styles.item}>
                    <NavLink exact to={PROFILE} activeClassName={styles.activeLick}>Profile</NavLink>
                </div>
                <div className={styles.item}>
                    <NavLink to={LOGIN} activeClassName={styles.activeLick}>Login</NavLink>
                </div>
                <div className={styles.item}>
                    <NavLink to={REGISTRATION} activeClassName={styles.activeLick}>Registration</NavLink>
                </div>
                <div className={styles.item}>
                    <NavLink to={RECOVER_PASSWORD} activeClassName={styles.activeLick}>RecoverPassword</NavLink>
                </div>
                <div className={styles.item}>
                    <NavLink to={NEW_PASS} activeClassName={styles.activeLick}>NewPass</NavLink>
                </div>
            </div>
        </div>
    )
};
