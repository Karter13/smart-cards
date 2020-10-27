import {Dispatch} from 'redux';
import {packsAPI} from '../p3-dal/packs-api';

const SET_PACKS = 'SET_PACKS';
const initialState: PacksInitialStateType = {
    cardPacks: [
        {
            cardsCount: 0,
            created: '2020-10-27T11:12:49.486Z',
            grade: 0,
            more_id: '5f8db2d0842c1e00044adcdf',
            name: 'new pack',
            path: '/def',
            private: false,
            rating: 0,
            shots: 0,
            type: 'pack',
            updated: '2020-10-27T11:12:49.486Z',
            user_id: '5f8db2d0842c1e00044adcdf',
            user_name: 'konstantinkspb@gmail.com',
            __v: 0,
            _id: '5f9800b17247822b58a8cad1'
        },
        {
            cardsCount: 0,
            created: '2020-10-27T11:12:47.033Z',
            grade: 0,
            more_id: '5f8db2d0842c1e00044adcdf',
            name: 'new pack',
            path: '/def',
            private: false,
            rating: 0,
            shots: 0,
            type: 'pack',
            updated: '2020-10-27T11:12:47.033Z',
            user_id: '5f8db2d0842c1e00044adcdf',
            user_name: 'konstantinkspb@gmail.com',
            __v: 0,
            _id: '5f9800af7247822b58a8cad0',
        },
        {
            cardsCount: 0,
            created: '2020-10-27T11:12:44.512Z',
            grade: 0,
            more_id: '5f8db2d0842c1e00044adcdf',
            name: 'new pack',
            path: '/def',
            private: false,
            rating: 0,
            shots: 0,
            type: 'pack',
            updated: '2020-10-27T11:12:44.512Z',
            user_id: '5f8db2d0842c1e00044adcdf',
            user_name: 'konstantinkspb@gmail.com',
            __v: 0,
            _id: '5f9800ac7247822b58a8cacf',
        },
        {
            cardsCount: 0,
            created: '2020-10-26T23:11:54.501Z',
            deckCover: '',
            grade: 0,
            more_id: '5eecf82a3ed8f700042f1186',
            name: 'update new pack 2.0',
            path: '/def',
            private: false,
            rating: 0,
            shots: 0,
            type: 'pack',
            updated: '2020-10-26T23:12:06.637Z',
            user_id: '5eecf82a3ed8f700042f1186',
            user_name: 'nya',
            __v: 0,
            _id: '5f9757ba080b9c0004e8c78b',
        },
        {
            cardsCount: 0,
            created: '2020-10-26T22:57:27.964Z',
            deckCover: null,
            grade: 0,
            more_id: '5f8aed62122a4300049db62a',
            name: 'new checked name',
            path: '/def',
            private: false,
            rating: 0,
            shots: 0,
            type: 'pack',
            updated: '2020-10-26T22:57:30.609Z',
            user_id: '5f8aed62122a4300049db62a',
            user_name: 'alexeisamuta@gmail.com',
            __v: 0,
            _id: '5f975457080b9c0004e8c78a',
        },
        {
            cardsCount: 0,
            created: '2020-10-26T20:31:43.957Z',
            grade: 0,
            more_id: '5f8a1b993a8b540004322cc8',
            name: 'no Name',
            path: '/def',
            private: false,
            rating: 0,
            shots: 0,
            type: 'pack',
            updated: '2020-10-26T20:31:43.957Z',
            user_id: '5f8a1b993a8b540004322cc8',
            user_name: 'kachanovski03@gmail.com',
            __v: 0,
            _id: '5f97322f080b9c0004e8c770',
        },
        {
            cardsCount: 0,
            created: '2020-10-23T17:09:47.044Z',
            grade: 0,
            more_id: '5f6756d7b7d4170004385d85',
            name: '2',
            path: '/def',
            private: false,
            rating: 0,
            shots: 0,
            type: 'pack',
            updated: '2020-10-23T17:09:47.044Z',
            user_id: '5f6756d7b7d4170004385d85',
            user_name: 'Vik',
            __v: 0,
            _id: '5f930e5b5cea1f1aa027b9ea',
        }
    ],
    cardPacksTotalCount: 693,
    maxCardsCount: 16,
    minCardsCount: 0,
    page: 1,
    pageCount: 100,
    token: 'fac9dcd0-1847-11eb-8597-0b97c01a13e4',
    tokenDeathTime: 1603809099421,
};

export const packsReduser = (state: PacksInitialStateType = initialState, action: ActionsType): PacksInitialStateType => {
    switch (action.type) {
        case SET_PACKS: {
            return {
                ...state, cardPacks: [...action.packs]
            }
        }
        default:
            return state
    }
};

//actionsCreators
export const setPacksAC = (packs: Array<PackType>) => ({type: SET_PACKS, packs} as const);

// thunk
export const requestPacksT = () => (dispatch: Dispatch) => {
    packsAPI.getPacks()
        .then(data => {
            dispatch(setPacksAC(data))
        })
};


export type PackType = {
    cardsCount: number
    created: string
    grade: number
    more_id: string
    name: string
    path: string
    private: boolean
    rating: number
    shots: number
    type: string
    updated: string
    user_id: string
    user_name: string
    __v: number
    _id: string
    deckCover?: string | null,
}
export type PacksInitialStateType = {
    cardPacks: Array<PackType>
    cardPacksTotalCount: number
    maxCardsCount: number
    minCardsCount: number
    page: number
    pageCount: number
    token: string
    tokenDeathTime: number
}
type  ActionsType = ReturnType<typeof setPacksAC>

