import React, {useState} from 'react';
import {Input} from '../../../../../n1-main/m1-ui/common/Input/Input';
import {Button} from '../../../../../n1-main/m1-ui/common/Button/Button';
import {Checkbox} from '../../../../../n1-main/m1-ui/common/Checkbox/Checkbox';
import style from './LoginForm.module.css'
import {NavLink} from 'react-router-dom';
import {RECOVER_PASSWORD, REGISTRATION} from '../../../../../n1-main/m1-ui/routes/Routes';
import styles from '../../../../../n1-main/m1-ui/header/Header.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../../../../n1-main/m2-bll/store';
import {setIsLoginInAC, setUserAC, UserType} from '../../l2-bll/auth-reducer';

export const LoginForm = React.memo(() => {

    const user = useSelector<AppRootStateType, UserType>(state => state.auth.user);
    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.auth.isLoggedIn);
    const dispatch = useDispatch();

    console.log(user);
    console.log(isLoggedIn);

    const [mailValue, setMailValue] = useState('email');
    const [password, setPassword] = useState('password');
    const [check, setCheck] = useState(false);

    const enterEmail = (value: string) => {
        setMailValue(value)
    };
    const enterPassword = (value: string) => {
        setPassword(value)
    };
    const changeStatus = (value: boolean) => {
        setCheck(value)
    };

    const onSubmit = () => {
        dispatch(setIsLoginInAC(true));
        dispatch(setUserAC({
            _id: '1',
            email: '2',
            name: 'A',
            avatar: 'AVATAR',
            publicCardPacksCount: 20, // количество колод
            created: new Date(),
            updated: new Date(),
            isAdmin: true,
            verified: true, // подтвердил ли почту
            rememberMe: true,
            error: 'error',
        }))
    };

    return (

        <div className={style.loginBlock}>
            <div className={style.inputBlock}>
                <Input onChange={enterEmail} value={mailValue}/>
            </div>
            <div className={style.inputBlock}>
                <Input onChange={enterPassword} value={password}/>
            </div>
            <div className={style.checkboxBlock}>
                <Checkbox checkboxValue={check} changeValue={changeStatus}/>
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
