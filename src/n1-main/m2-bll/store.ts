import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {profileReduser} from './profile-reducer';
import {loginReducer} from './login-reducer';
import {newPasswordReducer} from './newPassword-reducer';
import {registrationReducer} from '../../n2-faetures/f1-auth/a2-register/r2-bll/register-reducer';
import {recoverPasswordReducer} from './recoverPassword-reducer';
import {authReducer} from '../../n2-faetures/f1-auth/a1-login/l2-bll/auth-reducer';

const rootReducer = combineReducers({
    registration: registrationReducer,
    newPassword: newPasswordReducer,
    recoverPassword: recoverPasswordReducer,
    login: loginReducer,
    profile: profileReduser,
    auth: authReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
export type AppRootStateType = ReturnType<typeof rootReducer>;

// @ts-ignore
window.store = store;
