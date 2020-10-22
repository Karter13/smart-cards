import {Dispatch} from "redux";
import {RecoverApi} from "../rec3-dal/recoveryApi";

const SET_ACCEPTED: 'recover-password/SET_ACCEPTED' = 'recover-password/SET_ACCEPTED';
const SET_ERROR: 'recover-password/SET_ERROR' = 'recover-password/SET_ERROR';
const SET_FETCHING: 'recover-password/SET_FETCHING' = 'recover-password/SET_FETCHING';

const initialState = {
    isAccepted: false,
    isError: false,
    isFetching: false,
};
type InitialStateType = typeof initialState

export const recoverPasswordReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case SET_ACCEPTED:
            return {
                ...state,
                isAccepted: action.isAccepted,
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
export const setAcceptedAC = (isAccepted: boolean) => ({type: SET_ACCEPTED, isAccepted} as const);
const setErrorAC = (isError: boolean) => ({type: SET_ERROR, isError} as const);
const setFetchingAC = (isFetching: boolean) => ({type: SET_FETCHING, isFetching} as const);

// types
type ActionsType = ReturnType<typeof setAcceptedAC | typeof setErrorAC | typeof setFetchingAC>;

export const recoverTC = (email: string) => (dispatch: Dispatch) => {
    dispatch(setFetchingAC(true));
    RecoverApi.recover(email).then(res => {
        dispatch(setAcceptedAC(true));
        dispatch(setFetchingAC(false));

    }).catch(err => {
        dispatch(setErrorAC(true))
        dispatch(setFetchingAC(false));
    });
}
