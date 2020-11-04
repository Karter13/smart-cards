import {Dispatch} from 'redux';
import {packsAPI} from '../p3-dal/packs-api';
import {CurrentCardValuesType} from "../../c2-cards/c2-bll/cards-reduser";

const SET_PACKS = 'SET_PACKS';
const ADD_PACK = 'ADD_PACK';
const DELETE_PACK = 'DELETE_PACK';
const UPDATE_PACK = 'UPDATE_PACK';
const SET_MODAL: 'SET_MODAL' = 'SET_MODAL';
const SET_CURRENT_PACK_VALUES: 'SET_CURRENT_PACK_VALUES' = 'SET_CURRENT_PACK_VALUES';

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
    currentModal: '',
    currentPackValues: {
        id: '',
        name: '',
    },
};

export const packsReduser = (state: PacksInitialStateType = initialState, action: ActionsType): PacksInitialStateType => {
    switch (action.type) {
        case SET_PACKS: {
            return {
                ...state, cardPacks: [...action.packs]
            }
        }
        case ADD_PACK: {
            return {
                ...state, cardPacks: [action.pack, ...state.cardPacks]
            }
        }
        case DELETE_PACK: {
            return {
                ...state, cardPacks: state.cardPacks.filter(p => p._id !== action.id)
            }
        }
        case UPDATE_PACK: {
            return {
                ...state, cardPacks: state.cardPacks.map(pack => pack._id === action.id ? {...pack, name: action.name} : pack)
            }
        }
        case SET_MODAL:
            return {
                ...state,
                currentModal: action.modal,
            }
        case SET_CURRENT_PACK_VALUES:
            return {
                ...state,
                currentPackValues: {
                    ...state.currentPackValues,
                    ...action.payload,
                }
            }
        default:
            return state
    }
};

//actionsCreators
export const setPacksAC = (packs: Array<PackType>) => ({type: SET_PACKS, packs} as const);
export const addPackAC = (pack: PackType) => ({type: ADD_PACK, pack} as const);
export const deletePackAC = (id: string) => ({type: DELETE_PACK, id} as const);
export const updatePackAC = (id: string, name: string) => ({type: UPDATE_PACK, id, name} as const);
const setModalAC = (modal: ModalType) => ({type: SET_MODAL, modal} as const);
const setCurrentPackValuesAC = (payload: CurrentPackValuesType) => ({type: SET_CURRENT_PACK_VALUES, payload} as const);

// thunk
export const requestPacksT = () => (dispatch: Dispatch) => {
    packsAPI.getPacks()
        .then(data => {
            dispatch(setPacksAC(data))
        }).catch(() => console.log('error'))
};
export const addPackT = (cardsPack: { name: string }) => (dispatch: Dispatch) => {
    packsAPI.createPack(cardsPack)
        .then(data => {
            dispatch(addPackAC(data))
        })
};
export const deletePackT = (id: string) => (dispatch: Dispatch) => {
    packsAPI.deletePack(id)
        .then(() => {
            dispatch(deletePackAC(id))
        }).catch(() => console.log('delete error'))
};
export const updatePackT = (cardsPack: {_id: string, name: string}) => (dispatch: Dispatch) => {
    packsAPI.updatePack(cardsPack)
        .then(() => {
            dispatch(updatePackAC(cardsPack._id, cardsPack.name))
        }).catch(() => console.log('update error'))
};
export const setModalT = (modal: ModalType) => (dispatch: Dispatch) => {
    dispatch(setModalAC(modal))
};
export const setCurrentPackValuesT = (payload: CurrentPackValuesType) => (dispatch: Dispatch) => {
    dispatch(setCurrentPackValuesAC(payload));
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
export type CreatePackType = {
    newCardsPack: PackType,
    token: string
    tokenDeathTime: number
}
export type DeletePackType = {
    deletedCardsPack: PackType,
    token: string
    tokenDeathTime: number
}
export type UpdatePackType = {
    updatedCardsPack: PackType,
    token: string
    tokenDeathTime: number
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
    currentModal: ModalType
    currentPackValues: CurrentPackValuesType
}
type  ActionsType = ReturnType<typeof setPacksAC>
    | ReturnType<typeof addPackAC>
    | ReturnType<typeof deletePackAC>
    | ReturnType<typeof updatePackAC>
    | ReturnType<typeof setModalAC>
    | ReturnType<typeof setCurrentPackValuesAC>

type ModalType = '' | 'add' | 'update' | 'delete' | 'error';

export type CurrentPackValuesType = {
    id: string;
    name: string;
}
