import React, {useCallback, useState} from 'react';
import {Input} from '../../../../../n1-main/m1-ui/common/Input/Input';
import {Button} from '../../../../../n1-main/m1-ui/common/Button/Button';
import {Checkbox} from '../../../../../n1-main/m1-ui/common/Checkbox/Checkbox';
import style from './LoginForm.module.css'
import {NavLink, Redirect} from 'react-router-dom';
import {RECOVER_PASSWORD, REGISTRATION} from '../../../../../n1-main/m1-ui/routes/Routes';
import styles from '../../../../../n1-main/m1-ui/header/Header.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {loginTC} from '../../l2-bll/auth-reducer';
import {AppRootStateType} from '../../../../../n1-main/m2-bll/store';
import {Preloader} from '../../../../../n1-main/m1-ui/common/Preloader/Preloader';
import {RequestStatusType} from '../../../../../n1-main/m2-bll/app-reducer';

type LoginFormPropsType = {}

export const LoginForm: React.FC<LoginFormPropsType> = React.memo((props) => {

    const status = useSelector<AppRootStateType, RequestStatusType>(state => state.app.status);
    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.auth.isLoggedIn);
    const error = useSelector<AppRootStateType, string | null>(state => state.auth.error);
    const dispatch = useDispatch();

    const [email, setEmail] = useState<string>('Maikl@mail.ru');
    const [password, setPassword] = useState('1234567M');
    const [rememberMe, setRememberMe] = useState(false);

    const enterEmail = useCallback((value: string) => {
        setEmail(value)
    }, [email]);
    const enterPassword = useCallback((value: string) => {
        setPassword(value)
    }, [password]);
    const changeStatus = useCallback((value: boolean) => {
        setRememberMe(value)
    }, [rememberMe]);

    const onSubmit = useCallback(() => {
        const thunk = loginTC({email, password, rememberMe});
        dispatch(thunk);
        setEmail('Maikl@mail.ru');
        setPassword('1234567M');
        setRememberMe(false);
    }, [dispatch, email, password, rememberMe]);

    if (status === 'loading') {
        return <Preloader/>
    }
    if (isLoggedIn) {
        return <Redirect to={'/'}/>
    }

    return (

        <div className={style.loginBlock}>

            {error && <div style={{color: 'red'}}>{error.toString()}</div>}

            <div className={style.inputBlock}>
                <Input onChange={enterEmail} value={email}/>
            </div>
            <div className={style.inputBlock}>
                <Input onChange={enterPassword} value={password}/>
            </div>
            <div className={style.checkboxBlock}>
                <Checkbox checkboxValue={rememberMe} changeValue={changeStatus}/>
                <span>remember me</span>
            </div>

            <Button click={onSubmit} value={'login'}/>

            <div className={style.link}>
                <NavLink to={RECOVER_PASSWORD} activeClassName={styles.activeLick}>fogot fassword?</NavLink>
            </div>
            <div className={style.link}>
                <NavLink to={REGISTRATION} activeClassName={styles.activeLick}>register</NavLink>
            </div>
        </div>
    )
});
