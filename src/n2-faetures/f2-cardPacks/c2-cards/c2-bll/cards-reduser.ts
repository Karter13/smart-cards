import {AnyAction, Dispatch} from 'redux';
import {CardsApi} from '../c3-dal/cards-api';

const SET_CARDS: 'SET_CARDS' = 'SET_CARDS';
const ADD_CARD: 'ADD_CARD' = 'ADD_CARD';
const DELETE_CARD: 'DELETE_CARD' = 'DELETE_CARD';
const UPDATE_CARD: 'UPDATE_CARD' = 'UPDATE_CARD';
const SET_CARDS_PACK_ID: 'SET_CARDS_PACK_ID' = 'SET_CARDS_PACK_ID';
const UPDATE_CARD_GRADE: 'UPDATE_CARD_GRADE' = 'UPDATE_CARD_GRADE';


const SET_ERROR: 'SET_ERROR' = 'SET_ERROR';
const SET_FETCHING: 'SET_FETCHING' = 'SET_FETCHING';
const SET_MODAL: 'SET_MODAL' = 'SET_MODAL';
const SET_CURRENT_CARD_VALUES: 'SET_CURRENT_CARD_VALUES' = 'SET_CURRENT_CARD_VALUES';

export type CardType = {
    _id: string;
    cardsPack_id: string;
    user_id: string;
    answer: string;
    question: string
    grade: number;
    shots: number;
    comments: string;
    type: string;
    rating: number;
    more_id: string;
    created: string;
    updated: string;
    __v: number;
}
type CardForSendType = {
    cardsPack_id: string;
    question?: string;
    answer?: string;
    grade?: number;
    shots?: number;
    rating?: number;
    answerImg?: string;
    questionImg?: string;
    questionVideo?: string;
    answerVideo?: string;
    type?: string;
}

type CardForUpdateType = {
    object: CardForSendType
    comments: string;
}

type ModalType = '' | 'add' | 'update' | 'delete' | 'error';

export type CurrentCardValuesType = {
    id: string;
    question: string;
    answer: string;
}
// type InitialStateType = {
//     isError: boolean;
//     isFetching: boolean;
//     cardsPack_id: string;
//     cards: Array<CardType>;
//     currentModal: ModalType ;
// }

const initialState = {
    isError: false,
    isFetching: false,
    cardsPack_id: '',
    cards: [{
        _id: '',
        cardsPack_id: '',
        user_id: '',
        answer: '',
        question: '',
        grade: 0,
        shots: 0,
        comments: '',
        type: '',
        rating: 0,
        more_id: '',
        created: '',
        updated: '',
        __v: 0,
    }],
    currentModal: '',
    currentCardValues: {
        id: '',
        question: '',
        answer: '',
    }
};
type InitialStateType = typeof initialState;


export const cardsReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case SET_CARDS:
            return {
                ...state,
                cards: action.cards,
            };
        case SET_ERROR:
            return {
                ...state,
                isError: action.isError,
            };
        case SET_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching,
            };
        case ADD_CARD:
            return {
                ...state,
            };

        case UPDATE_CARD:
            return {
                ...state,
            };
        case DELETE_CARD:
            return {
                ...state,
            };
        case SET_CARDS_PACK_ID:
            return {
                ...state,
                cardsPack_id: action.id,
            }
        case SET_MODAL:
            return {
                ...state,
                currentModal: action.modal,
            }
        case SET_CURRENT_CARD_VALUES:
            return {
                ...state,
                currentCardValues: {
                    ...state.currentCardValues,
                    ...action.payload,
                },
            }
        case UPDATE_CARD_GRADE: {
            return {
                ...state,
                cards: state.cards.map(card => card._id === action.payload.id ? {...card, grade: action.payload.grade} : {...card})
            }
        }
        default:
            return state;
    }
};

// actions
const setCardsAC = (cards: Array<CardType>) => ({type: SET_CARDS, cards} as const);
const addCardAC = (payload: CardForSendType) => ({type: ADD_CARD, payload} as const);
const deleteCardAC = (id: string) => ({type: DELETE_CARD, id} as const);
const updateCardAC = (payload: CardForUpdateType) => ({type: UPDATE_CARD, payload} as const);
const setCardsPackIdAC = (id: string) => ({type: SET_CARDS_PACK_ID, id} as const);
export const updateCardGradeAC = (payload: { id: string, grade: number }) => ({
    type: UPDATE_CARD_GRADE,
    payload
} as const);


const setErrorAC = (isError: boolean) => ({type: SET_ERROR, isError} as const);
const setFetchingAC = (isFetching: boolean) => ({type: SET_FETCHING, isFetching} as const);
const currentModalAC = (modal: ModalType) => ({type: SET_MODAL, modal} as const);
const setCurrentCardValuesAC = (payload: CurrentCardValuesType) => ({type: SET_CURRENT_CARD_VALUES, payload} as const);

// types
type ActionsType = ReturnType<typeof setCardsAC | typeof setErrorAC | typeof setFetchingAC |
    typeof addCardAC | typeof deleteCardAC | typeof updateCardAC | typeof setCardsPackIdAC |
    typeof currentModalAC | typeof setCurrentCardValuesAC | typeof updateCardGradeAC>


export const setCardsTC = (cardsPack_id: string, cardAnswer?: string, cardQuestion?: string,
                           min?: number, max?: number, shortCards?: string, grade?: number,
                           page?: number, pageCount?: number
) => (dispatch: Dispatch) => {
    dispatch(setFetchingAC(true));
    CardsApi.getCards(cardsPack_id, cardAnswer, cardQuestion, min, max, shortCards, grade, page,
        pageCount)
        .then(res => {
            dispatch(setCardsAC(res.data.cards));
            dispatch(setFetchingAC(false));

        }).catch(err => {
        dispatch(setErrorAC(true))
        dispatch(setFetchingAC(false));
    });
}

export const addCardTC = (cardsPack_id: string, question?: string, answer?: string, grade?: number,
                          shots?: number, rating?: number, answerImg?: string, questionImg?: string,
                          questionVideo?: string, answerVideo?: string, type?: string
) => (dispatch: any, getState: any) => {
    dispatch(setFetchingAC(true));
    CardsApi.addCard(cardsPack_id, question, answer, grade,
        shots, rating, answerImg, questionImg,
        questionVideo, answerVideo, type)
        .then(res => {
            dispatch(setCardsTC(getState().cards.cardsPack_id, undefined, undefined,
                undefined, undefined, undefined, undefined, undefined,
                20));
            dispatch(setFetchingAC(false));

        }).catch(err => {
        dispatch(setErrorAC(true))
        dispatch(setFetchingAC(false));
    });
}

export const deleteCardTC = (id: string) => (dispatch: any, getState: any) => {
    dispatch(setFetchingAC(true));
    CardsApi.deleteCard(id)
        .then(res => {
            dispatch(setCardsTC(getState().cards.cardsPack_id, undefined, undefined,
                undefined, undefined, undefined, undefined, undefined,
                20));
            dispatch(setFetchingAC(false));

        }).catch(err => {
        dispatch(setErrorAC(true))
        dispatch(setFetchingAC(false));
    });
}

export const updateCardTC = (id: string, question?: string, answer?: string, grade?: number,
                             shots?: number, rating?: number, answerImg?: string, questionImg?: string,
                             questionVideo?: string, answerVideo?: string, type?: string, comments?: string
) => (dispatch: any, getState: any) => {
    dispatch(setFetchingAC(true));
    CardsApi.updateCard(id, question, answer, grade,
        shots, rating, answerImg, questionImg,
        questionVideo, answerVideo, type, comments)
        .then(res => {
            dispatch(setCardsTC(getState().cards.cardsPack_id));
            dispatch(setFetchingAC(false));

        }).catch(err => {
        dispatch(setErrorAC(true))
        dispatch(setFetchingAC(false));
    });
}

export const setCardsPackIdTC = (cardsPackId: string) => (dispatch: Dispatch) => {
    dispatch(setCardsPackIdAC(cardsPackId));
}

export const toggleModalTC = (modal: ModalType) => (dispatch: Dispatch) => {
    dispatch(currentModalAC(modal))
};

export const setCurrentCardValuesTC = (payload: CurrentCardValuesType) => (dispatch: Dispatch) => {
    dispatch(setCurrentCardValuesAC(payload));
};
