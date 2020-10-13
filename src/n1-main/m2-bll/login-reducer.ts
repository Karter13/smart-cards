
const initialState = {};
type InitialStateType = typeof initialState

export const loginReducer = (state: InitialStateType = initialState , action: ActionsType):InitialStateType => {
    switch (action.type) {
        case 'SET_IS_LOGGET_IN':
            return {...state};
        default:
            return state

    }
};

// actions
export const setIsLoggedInAC = () => ({type: 'SET_IS_LOGGET_IN'} as const);

// types
type ActionsType = ReturnType<typeof setIsLoggedInAC>
