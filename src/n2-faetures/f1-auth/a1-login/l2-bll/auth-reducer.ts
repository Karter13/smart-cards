import {Dispatch} from 'redux';
import {authAPI, LoginParamsType, UserType} from '../l3-dal/cards-api';

const SET_IS_LOGGED_IN = 'login/SET_IS_LOGGED_IN';
const SET_USER = 'login/SET_USER';

const initialState = {
    user: {
        _id: '',
        email: '',
        name: '',
        avatar: '',
        publicCardPacksCount: 0, // количество колод
        created: new Date(),
        updated: new Date(),
        isAdmin: false,
        verified: false, // подтвердил ли почту
        rememberMe: false,
        error: '',
    },
    isLoggedIn: false,
};

export const authReducer = (state: AuthInitialStateType = initialState, action: ActionsType): AuthInitialStateType => {
    switch (action.type) {
        case SET_IS_LOGGED_IN:
            return {...state, isLoggedIn: action.value};
        case SET_USER:
            return {...state, user: {...action.user}};
        default:
            return state
    }
};

// actions
export const setIsLoginInAC = (value: boolean) =>
    ({type: SET_IS_LOGGED_IN, value} as const);
export const setUserAC = (user: UserType) =>
    ({type: SET_USER, user} as const);

// thunks
export const loginTc = (data: LoginParamsType) => (dispatch: Dispatch) => {
    authAPI.login(data)
        .then((res) => {
            if(res.data) {
                dispatch(setUserAC(res.data));
                dispatch(setIsLoginInAC(true))
            }
        })
        .catch((e) => {

        })
};


// types
export type AuthInitialStateType = typeof initialState
type ActionsType = ReturnType<typeof setIsLoginInAC>
    | ReturnType<typeof setUserAC>
