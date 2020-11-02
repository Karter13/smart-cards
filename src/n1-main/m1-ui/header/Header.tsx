import React, {useCallback} from 'react';
import styles from './Header.module.css'
import {NavLink} from 'react-router-dom';
import {CARDS, LEARN, LOGIN, NEW_PASS, PACKS, PROFILE, RECOVER_PASSWORD, REGISTRATION} from '../routes/Routes';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../m2-bll/store';
import {Button} from '@material-ui/core';
import {logoutTC} from '../../../n2-faetures/f1-auth/a1-login/l2-bll/auth-reducer';

export const Header = () => {
    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.auth.isLoggedIn);
    const dispatch = useDispatch();

    const logoutHandler = useCallback(() => {
        dispatch(logoutTC())
    }, [isLoggedIn]);

    return (
        <div className={styles.nav}>
            <div className={styles.menu}>

                <div className={styles.button}>
                    {isLoggedIn && <Button variant="contained" color="primary" onClick={logoutHandler}>Log out</Button>}
                </div>

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
                <div className={styles.item}>
                    <NavLink to={PACKS} activeClassName={styles.activeLick}>PacksPage</NavLink>
                </div>
                <div className={styles.item}>
                    <NavLink to={CARDS} activeClassName={styles.activeLick}>CardsPage</NavLink>
                </div>
                <div className={styles.item}>
                    <NavLink to={LEARN} activeClassName={styles.activeLick}>LearnPage</NavLink>
                </div>
            </div>
        </div>
    )
};
