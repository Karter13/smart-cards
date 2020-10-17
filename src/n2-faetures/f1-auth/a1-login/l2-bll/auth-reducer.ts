const initialState = {
    user: {
        _id: '',
        email: '',
        name: '',
        avatar: '',
        publicCardPacksCount: 0, // количество колод
        created: '',
        updated: '',
        isAdmin: false,
        verified: false, // подтвердил ли почту
        rememberMe: false,
        error: '',
    },
    isLoggedIn: false,
};

export const authReducer = (state: authInitialStateType = initialState, action: ActionsType): authInitialStateType => {
    switch (action.type) {
        case 'login/SET-IS-LOGGED-IN':
            return {...state, isLoggedIn: action.value};
        default:
            return state
    }
};

// actions
export const setIsLoggedInAC = (value: boolean) =>
    ({type: 'login/SET-IS-LOGGED-IN', value} as const);
// thunks

// types
type ActionsType = ReturnType<typeof setIsLoggedInAC>


// export type userType = {
//     _id: string,
//     email: string,
//     name: string,
//     avatar: string,
//     publicCardPacksCount: number, // количество колод
//     created: Date,
//     updated: Date,
//     isAdmin: boolean,
//     verified: boolean, // подтвердил ли почту
//     rememberMe: boolean,
//     error: string,
// }
export type authInitialStateType = typeof initialState
