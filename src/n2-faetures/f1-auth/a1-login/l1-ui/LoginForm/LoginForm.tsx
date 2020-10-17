import React from 'react';
import {Input} from '../../../../../n1-main/m1-ui/common/Input/Input';
import {Button} from '../../../../../n1-main/m1-ui/common/Button/Button';
import {Checkbox} from '../../../../../n1-main/m1-ui/common/Checkbox/Checkbox';
import style from './LoginForm.module.css'
import {NavLink} from 'react-router-dom';
import {RECOVER_PASSWORD, REGISTRATION} from '../../../../../n1-main/m1-ui/routes/Routes';
import styles from '../../../../../n1-main/m1-ui/header/Header.module.css';

export const LoginForm = () => {
    return (
        <div className={style.loginBlock}>
            <div className={style.inputBlock}>
                <Input onChange={() => console.log('mailInput')} value={'mailInput'}/>
            </div>
            <div className={style.inputBlock}>
                <Input onChange={() => console.log('passwordInput')} value={'passwordInput'}/>
            </div>
            <div className={style.checkboxBlock}>
                <Checkbox checkboxValue={true} changeValue={() => console.log('checkBoxTrue')}/>
                <span>remember me</span>
            </div>

            <Button click={() => console.log('clickButton')} value={'login'}/>

            <div className={style.link}>
                <NavLink to={RECOVER_PASSWORD} activeClassName={styles.activeLick}>fogot fassword?</NavLink>
            </div>
            <div className={style.link}>
                <NavLink to={REGISTRATION} activeClassName={styles.activeLick}>register</NavLink>
            </div>
        </div>
    )
};
