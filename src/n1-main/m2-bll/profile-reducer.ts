const initialState = {};
type InitialStateType = typeof initialState

export const profileReduser = (state: InitialStateType = initialState , action: ActionsType):InitialStateType => {
    switch (action.type) {
        case 'PROFILE':
            return {...state};
        default:
            return state
    }
};

// actions
export const profileAC = () => ({type: 'PROFILE'} as const);

// types
type ActionsType = ReturnType<typeof profileAC>
