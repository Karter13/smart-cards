const initialState = {};
type InitialStateType = typeof initialState

export const recoverPasswordReducer = (state: InitialStateType = initialState , action: ActionsType):InitialStateType => {
    switch (action.type) {
        case 'RECOVER_PASSWORD':
            return {...state};
        default:
            return state

    }
};

// actions
export const recoverPasswordAC = () => ({type: 'RECOVER_PASSWORD'} as const);

// types
type ActionsType = ReturnType<typeof recoverPasswordAC>
