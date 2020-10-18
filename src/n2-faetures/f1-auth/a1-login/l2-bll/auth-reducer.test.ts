import {AuthInitialStateType, authReducer, setIsLoginInAC, setUserAC} from './auth-reducer';

let startState: AuthInitialStateType;

beforeEach(() => {
    startState = {
        user: {
            _id: '',
            email: '',
            name: '',
            avatar: '',
            publicCardPacksCount: 0,
            created: new Date(),
            updated: new Date(),
            isAdmin: false,
            verified: false,
            rememberMe: false,
            error: '',
        },
        isLoggedIn: false,

    }
});
test('correct login should correctly change isLoggedIn', () => {
    const action = setIsLoginInAC(true);
    const endState = authReducer(startState, action);

    expect(endState.isLoggedIn).toBeTruthy()
});

test('correct login should correctly change isLoggedIn', () => {

    const action = setUserAC({
        _id: '111',
        email: '111',
        name: 'Name',
        avatar: 'AVATAR',
        publicCardPacksCount: 20,
        created: new Date(),
        updated: new Date(),
        isAdmin: true,
        verified: true,
        rememberMe: true,
        error: 'error',
    });
    const endState = authReducer(startState, action);

    expect(endState.user._id).toBe('111');
    expect(endState.user.rememberMe).toBeTruthy()
});
