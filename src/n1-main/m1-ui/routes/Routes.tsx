import React from 'react';
import {Route, Redirect, Switch} from 'react-router-dom';
import {Profile} from '../profile/Profile';
import {Login} from '../login/Login';
import {Registration} from '../registration/Registration';
import {RecoverPassword} from '../recoverPassword/RecoverPassword';
import {NewPass} from '../newPassword/NewPass';

export const Routes = () => {
    return (
        <div>
            <Route exact path={'/'} render={() => <Profile/>}/>
            <Route path={'/login'} render={() => <Login/>}/>
            <Route path={'/registration'} render={() => <Registration/>}/>
            <Route path={'/recoverPassword'} render={() => <RecoverPassword/>}/>
            <Route path={'/newPass'} render={() => <NewPass/>}/>
        </div>
    )
};
