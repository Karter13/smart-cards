import React from 'react';
import styles from './Header.module.css'
import {NavLink} from 'react-router-dom';
import {LOGIN, NEW_PASS, PROFILE, RECOVER_PASSWORD, REGISTRATION} from '../routes/Routes';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../m2-bll/store';
import {Button} from '@material-ui/core';

export const Header = () => {
    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.auth.isLoggedIn);
    const dispatch = useDispatch();
    return (
        <div className={styles.nav}>
            <div className={styles.menu} >

                {isLoggedIn && <Button color="secondary" onClick={() => console.log('logout')}>Log out</Button>}

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
