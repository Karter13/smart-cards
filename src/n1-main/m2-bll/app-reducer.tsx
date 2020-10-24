import {Dispatch} from 'redux';
import {authAPI} from '../../n2-faetures/f1-auth/a1-login/l3-dal/cards-api';
import {setIsLoginInAC, setUserAC} from '../../n2-faetures/f1-auth/a1-login/l2-bll/auth-reducer';

const SET_STATUS = 'APP/SET-STATUS';
const SET_ERROR = 'APP/SET-ERROR';
const SET_IS_INITIALIZED = 'APP/SET-IS-INITIALIZED';

const initialState = {
    status: 'idle' as RequestStatusType,
    error: null as string | null,
    isInitialized: false
};

export const appReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case SET_STATUS:
            return {...state, status: action.status};
        case SET_ERROR:
            return {...state, error: action.error};
        case SET_IS_INITIALIZED:
            return {...state, isInitialized: action.isInitialized};
        default:
            return state
    }
};

export const setAppStatusAC = (status: RequestStatusType) => ({type: SET_STATUS, status} as const);
export const setAppErrorAC = (error: string | null) => ({type: SET_ERROR, error} as const);
export const setAppIsInitializedAC = (isInitialized: boolean) => ({type: SET_IS_INITIALIZED, isInitialized} as const);


export const initializeAppTC = () => (dispatch: Dispatch) => {
    dispatch(setAppStatusAC('loading'));
    authAPI.me()
        .then(res => {
            if (res.data) {
                dispatch(setUserAC(res.data));
                dispatch(setIsLoginInAC(true));
                dispatch(setAppStatusAC('succeeded'));
            } else {
                dispatch(setIsLoginInAC(false));
                dispatch(setAppStatusAC('succeeded'));
            }
            dispatch(setAppIsInitializedAC( true))
            dispatch(setAppStatusAC('succeeded'));
        })
        .catch(() => {
            dispatch(setAppStatusAC('succeeded'));
        })

};


export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'
export type InitialStateType = typeof initialState
export type SetAppStatusActionType = ReturnType<typeof setAppStatusAC>
export type SetAppErrorActionType = ReturnType<typeof setAppErrorAC>
export type SetIsInitializedActionType = ReturnType<typeof setAppIsInitializedAC>

type ActionsType =
    | SetAppStatusActionType
    | SetAppErrorActionType
    | SetIsInitializedActionType


