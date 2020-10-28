import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {profileReduser} from './profile-reducer';
import {loginReducer} from './login-reducer';
import {newPasswordReducer} from './newPassword-reducer';
import {registrationReducer} from '../../n2-faetures/f1-auth/a2-register/r2-bll/register-reducer';
import {recoverPasswordReducer} from '../../n2-faetures/f1-auth/a3-recovery/rec2-bll/recover-password-reducer';
import {authReducer} from '../../n2-faetures/f1-auth/a1-login/l2-bll/auth-reducer';
import {appReducer} from './app-reducer';
import { packsReduser } from '../../n2-faetures/f2-cardPacks/c1-packs/p2-bll/packs-reducer';
import {cardsReducer} from "../../n2-faetures/f2-cardPacks/c2-cards/c2-bll/cards-reduser";

const rootReducer = combineReducers({
    registration: registrationReducer,
    newPassword: newPasswordReducer,
    recoverPassword: recoverPasswordReducer,
    login: loginReducer,
    profile: profileReduser,
    auth: authReducer,
    app: appReducer,
    packs: packsReduser
    app: appReducer,
    cards: cardsReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
export type AppRootStateType = ReturnType<typeof rootReducer>;

// @ts-ignore
window.store = store;
