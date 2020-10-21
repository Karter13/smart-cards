import React, {useCallback, useEffect, useState} from 'react';
import {Button} from '../common/Button/Button';
import {Input} from '../common/Input/Input';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../m2-bll/store';
import {Redirect} from 'react-router-dom';
import {initializeAppTC} from '../../m2-bll/app-reducer';
import {Preloader} from '../common/Preloader/Preloader';

export const Profile = React.memo(() => {

    const isInitialized = useSelector<AppRootStateType, boolean>(state => state.app.isInitialized)
    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.auth.isLoggedIn);
    let user = useSelector<AppRootStateType, any>(state => state.auth.user);
    const [value, setValue] = useState('demo input');
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(initializeAppTC())
    }, []);

    const onChange = useCallback((value: string) => {
        setValue(value)
    }, [value]);

    const onBlur = useCallback(() => {
        setValue('demo input')
    }, [value]);

    if (!isInitialized) {
        return <div>
            <Preloader/>
        </div>
    }

    if(!isLoggedIn) {
        return <Redirect to={'/login'}/>
    }

    return (
        <div>
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


