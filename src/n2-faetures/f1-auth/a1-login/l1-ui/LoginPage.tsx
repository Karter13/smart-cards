import React from 'react';
import {LoginFormContainer} from './LoginForm/LoginFormContainer';

export const LoginPage = React.memo(() => {
    return (
        <div>
            <LoginFormContainer/>
        </div>
    )
});
