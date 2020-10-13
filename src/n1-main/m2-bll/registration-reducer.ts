const initialState = {};
type InitialStateType = typeof initialState

export const registrationReduser = (state: InitialStateType = initialState , action: ActionsType):InitialStateType => {
    switch (action.type) {
        case 'REGISTRATION':
            return {...state};
        default:
            return state

    }
};

// actions
export const registrationAC = () => ({type: 'REGISTRATION'} as const);

// types
type ActionsType = ReturnType<typeof registrationAC>
