import {Dispatch} from 'redux';
import {cardAPI} from '../s3-dal/selectCard-api';
import {updateCardGradeAC} from '../../../f2-cardPacks/c2-cards/c2-bll/cards-reduser';

const ADD_NEXT_CARD = 'selectCard/ADD_NEXT_CARD';


const initialState: CardType = {
    _id: 'fake',
    cardsPack_id: '',
    answer: 'answer fake',
    question: 'question',
    grade: 0,
    shots: 0,
    type: '',
    rating: 0,
    more_id: '',
    created: '',
    updated: '',
    user_id: '',
    comments: '',
    __v: 0,
};

export const cardReducer = (state: CardType = initialState, action: ActionsType): CardType => {
    switch (action.type) {
        case ADD_NEXT_CARD: {
            return {
                ...state, ...action.card
            }
        }
        default:
            return state
    }
};

//actions
const ActionsTypeAC = (card: CardType) => ({type: ADD_NEXT_CARD, card} as const);

//thunks
export const addNewCardTC = (card: CardType) => (dispatch: Dispatch) => {
    dispatch(ActionsTypeAC(card))
};
export const updateCardGradeTC = (grade: number, cardId: string) => (dispatch: Dispatch) => {

    cardAPI.sendCardGrade(grade, cardId)
        .then(res => {
            console.log(res);
            console.log(res.card_id);
            console.log(res.grade);
            let id = res.card_id;
            let grade = res.grade;
            dispatch(updateCardGradeAC({id, grade}));

        })
        .catch(() => console.log('same error'))
};

//types
export type CardType = {
    _id: string;
    cardsPack_id: string;
    answer: string;
    question: string;
    grade: number;
    shots: number;
    type: string;
    rating: number;
    more_id: string;
    created: string;
    updated: string;
    user_id?: string;
    comments?: string;
    __v?: number;
}
type ActionsType = ReturnType<typeof ActionsTypeAC>

