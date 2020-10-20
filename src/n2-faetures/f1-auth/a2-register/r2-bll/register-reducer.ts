import {Dispatch} from "redux";
import {RegistrationApi} from "../r3-dal/cards-reduser-api";

const REGISTER: 'REGISTER' = 'REGISTER';
const SET_ERROR: 'SET_ERROR' = 'SET_ERROR';
const SET_FETCHING: 'SET_FETCHING' = 'SET_FETCHING';

const initialState = {
    isRegistered: false,
    isError: false,
    isFetching: false,
};
type InitialStateType = typeof initialState

export const registrationReducer = (state: InitialStateType = initialState , action: ActionsType):InitialStateType => {
    switch (action.type) {
        case REGISTER:
            return {
                ...state,
                isRegistered: action.isRegistered,
            };
        case SET_ERROR:
            return {
                ...state,
                isError: action.isError,
            };
        case SET_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching,
            }
        default:
            return state;
    }
};

// actions
export const registrationAC = (isRegistered: boolean) => ({type: REGISTER, isRegistered} as const);
const setErrorAC = (isError: boolean) => ({type: SET_ERROR, isError} as const);
const setFetchingAC = (isFetching: boolean) => ({type: SET_FETCHING, isFetching} as const);

// types
type ActionsType = ReturnType<typeof registrationAC | typeof setErrorAC | typeof setFetchingAC>;

export const registerTC = (email: string, password: string) => (dispatch: Dispatch) => {
    dispatch(setFetchingAC(true));
    RegistrationApi.register(email, password).then(res => {
        dispatch(registrationAC(true));
        dispatch(setFetchingAC(false));

    }).catch(err => {
        dispatch(setErrorAC(true))
        dispatch(setFetchingAC(false));
    });
}
