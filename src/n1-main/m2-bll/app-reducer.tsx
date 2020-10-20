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


// export const initializeAppTC = () => (dispatch: Dispatch) => {
//     authAPI.me().then(res => {
//         if (res.data.resultCode === 0) {
//             dispatch(setIsLoggedInAC(true));
//         } else {
//         }
//         dispatch(setAppIsInitializedAC(true))
//     })
// };


export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'
export type InitialStateType = typeof initialState
export type SetAppStatusActionType = ReturnType<typeof setAppStatusAC>
export type SetAppErrorActionType = ReturnType<typeof setAppErrorAC>
export type SetIsInitializedActionType = ReturnType<typeof setAppIsInitializedAC>

type ActionsType =
    | SetAppStatusActionType
    | SetAppErrorActionType
    | SetIsInitializedActionType


