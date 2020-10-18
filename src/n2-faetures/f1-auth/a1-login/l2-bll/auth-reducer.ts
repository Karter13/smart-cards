const initialState = {
    user: {
        _id: '',
        email: '',
        name: '',
        avatar: '',
        publicCardPacksCount: 0, // количество колод
        created: new Date(),
        updated: new Date(),
        isAdmin: false,
        verified: false, // подтвердил ли почту
        rememberMe: false,
        error: '',
    },
    isLoggedIn: false,
};

export const authReducer = (state: AuthInitialStateType = initialState, action: ActionsType): AuthInitialStateType => {
    switch (action.type) {
        case 'login/SET_IS_LOGGED_IN':
            return {...state, isLoggedIn: action.value};
        case 'login/SET_USER':
            return {...state, user: {...action.user}};
        default:
            return state
    }
};

// actions
export const setIsLoginInAC = (value: boolean) =>
    ({type: 'login/SET_IS_LOGGED_IN', value} as const);
export const setUserAC = (user: UserType) =>
    ({type: 'login/SET_USER', user} as const);

// thunks

// types
export type UserType = {
    _id: string,
    email: string,
    name: string,
    avatar: string,
    publicCardPacksCount: number, // количество колод
    created: Date,
    updated: Date,
    isAdmin: boolean,
    verified: boolean, // подтвердил ли почту
    rememberMe: boolean,
    error: string,
}
export type AuthInitialStateType = typeof initialState
type ActionsType = ReturnType<typeof setIsLoginInAC>
    | ReturnType<typeof setUserAC>
