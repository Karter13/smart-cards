import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../m2-bll/store';
import {Redirect} from 'react-router-dom';
import {initializeAppTC, RequestStatusType} from '../../m2-bll/app-reducer';
import {Preloader} from '../common/Preloader/Preloader';
import styles from './Profile.module.css'

export const Profile = React.memo(() => {

    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.auth.isLoggedIn);
    const status = useSelector<AppRootStateType, RequestStatusType>(state => state.app.status);
    let user = useSelector<AppRootStateType, any>(state => state.auth.user);
    const dispatch = useDispatch();

    useEffect(() => {
        if(!user._id || !isLoggedIn) {
            dispatch(initializeAppTC())
        }
    }, [dispatch]);


    if (status === 'idle' || status === 'loading') {
        return <div>
            <Preloader/>
        </div>
    }
    if (!isLoggedIn) {
        return <Redirect to={'/login'}/>
    }

    return (
        <div className={styles.container}>
            <h1>Profile</h1>
            <div>email: {user.email} </div>
            <div>token: {user.token}</div>
            <div>publicCardPacksCount: {user.publicCardPacksCount}</div>
        </div>
    )
});


