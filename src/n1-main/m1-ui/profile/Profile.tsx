import React, {useCallback, useEffect, useState} from 'react';
import {Button} from '../common/Button/Button';
import {Input} from '../common/Input/Input';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../m2-bll/store';
import {Redirect} from 'react-router-dom';
import {initializeAppTC, RequestStatusType} from '../../m2-bll/app-reducer';
import {Preloader} from '../common/Preloader/Preloader';
import styles from './Profile.module.css'

export const Profile = React.memo(() => {

    const status = useSelector<AppRootStateType, RequestStatusType>(state => state.app.status);
    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.auth.isLoggedIn);
    let user = useSelector<AppRootStateType, any>(state => state.auth.user);
    const [value, setValue] = useState('demo input');
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(initializeAppTC())
    }, [dispatch]);

    const onChange = useCallback((value: string) => {
        setValue(value)
    }, [value]);

    const onBlur = useCallback(() => {
        setValue('demo input')
    }, [value]);


    if (status === 'loading') {
        return <div>
            <Preloader/>
        </div>
    }

    if(!isLoggedIn) {
        return <Redirect to={'/login'}/>
    }

    return (
        <div className={styles.container}>
            <h1>Profile</h1>
            <div>name: {user.name}</div>
            <div>email: {user.email} </div>
            <div>avatar: {user.avatar}</div>
            <div>token: {user.token}</div>
            <Input value={value} onChange={onChange} onBlur={onBlur}/>
            <Button value={'demo'} click={() => alert('CLICK')}/>
        </div>
    )
});


