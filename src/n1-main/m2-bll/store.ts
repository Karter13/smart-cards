import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {profileReduser} from './profile-reducer';
import {loginReducer} from './login-reducer';
import {newPasswordReducer} from './newPassword-reducer';
import {registrationReduser} from './registration-reducer';
import {recoverPasswordReducer} from './recoverPassword-reducer';

const rootReducer = combineReducers({
    registration: registrationReduser,
    newPassword: newPasswordReducer,
    recoverPassword: recoverPasswordReducer,
    login: loginReducer,
    profile: profileReduser,
});

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
export type AppRootStateType = ReturnType<typeof rootReducer>;

// @ts-ignore
window.store = store;
