import React from 'react';
import {Route} from 'react-router-dom';
import {Profile} from '../profile/Profile';
import {Login} from '../login/Login';
import {Registration} from '../../../n2-faetures/f1-auth/a2-register/r1-ui/RegisterPage';
import {RecoverPasswordPage} from '../../../n2-faetures/f1-auth/a3-recovery/rec1-ui/RecoverPasswordPage/RecoverPasswordPage';
import {NewPass} from '../newPassword/NewPass';
import {PacksPage} from '../Packs/PacksPage';
import {CardsPage} from '../CardsPage/CardsPage';
import {LearnPage} from '../learnPage/LearnPage';

export const PROFILE = '/';
export const LOGIN = '/login';
export const REGISTRATION = '/registration';
export const RECOVER_PASSWORD = '/recoverPassword';
export const NEW_PASS = '/newPass';
export const PACKS = '/packs';
export const CARDS = '/cards';
export const LEARN = '/learn/:id';



export const Routes = () => {
    return (
        <div>
            <Route exact path={PROFILE} render={() => <Profile/>}/>
            <Route path={LOGIN} render={() => <Login/>}/>
            <Route path={REGISTRATION} render={() => <Registration/>}/>
            <Route path={RECOVER_PASSWORD} render={() => <RecoverPasswordPage/>}/>
            <Route path={NEW_PASS} render={() => <NewPass/>}/>
            <Route path={PACKS} render={() => <PacksPage/>}/>
            <Route path={CARDS} render={() => <CardsPage/>}/>
            {/*<Route path={LEARN} render={() => <LearnPage/>}/>*/}
            <Route path={'/learn/:id'} render={() => <LearnPage/>}/>
        </div>
    )
};
