const initialState = {};
type InitialStateType = typeof initialState

export const newPasswordReducer = (state: InitialStateType = initialState , action: ActionsType):InitialStateType => {
    switch (action.type) {
        case 'SET_NEW_PASSWORD':
            return {...state};
        default:
            return state

    }
};

// actions
export const newPassworddAC = () => ({type: 'SET_NEW_PASSWORD'} as const);

// types
type ActionsType = ReturnType<typeof newPassworddAC>
