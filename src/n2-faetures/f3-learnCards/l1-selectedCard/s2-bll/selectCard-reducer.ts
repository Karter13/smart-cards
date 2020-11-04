const SHOW_BACK_PART_CARD = 'selectCard/SHOW_BACK_PART_CARD';

const initialState: CardType = {
    _id: 'fake',
    cardsPack_id: '',
    answer: 'answer fake',
    question: 'question fake',
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

export const cardReducer = (state: CardType = initialState, action: any) => {
    switch (action.type) {
        case SHOW_BACK_PART_CARD: {
            return {
                ...state
            }
        }
        default:
            return state
    }
};

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
