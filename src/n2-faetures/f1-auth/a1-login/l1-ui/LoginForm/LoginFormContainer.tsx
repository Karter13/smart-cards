import React from 'react';
import {LoginForm} from './LoginForm';
import {useSelector} from 'react-redux';
import {AppRootStateType} from '../../../../../n1-main/m2-bll/store';
import {RequestStatusType} from '../../../../../n1-main/m2-bll/app-reducer';
import {Preloader} from '../../../../../n1-main/m1-ui/common/Preloader/Preloader';
import {Login} from './Login';

export const LoginFormContainer = React.memo(() => {


    return (
        <div>
            {/*<LoginForm/>*/}
            <Login/>
        </div>
    )
});


