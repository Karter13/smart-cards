import React from 'react';
import {Route} from 'react-router-dom';
import {Profile} from '../profile/Profile';
import {Login} from '../login/Login';
import {Registration} from '../registration/Registration';
import {RecoverPassword} from '../recoverPassword/RecoverPassword';
import {NewPass} from '../newPassword/NewPass';

export const PROFILE = '/';
export const LOGIN = '/login';
export const REGISTRATION = '/registration';
export const RECOVER_PASSWORD = '/recoverPassword';
export const NEW_PASS = '/newPass';


export const Routes = () => {
    return (
        <div>
            <Route exact path={PROFILE} render={() => <Profile/>}/>
            <Route path={LOGIN} render={() => <Login/>}/>
            <Route path={REGISTRATION} render={() => <Registration/>}/>
            <Route path={RECOVER_PASSWORD} render={() => <RecoverPassword/>}/>
            <Route path={NEW_PASS} render={() => <NewPass/>}/>
        </div>
    )
};
