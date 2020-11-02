const SHOW_BACK_PART_CARD = 'selectCard/SHOW_BACK_PART_CARD';

const initialState: CardType = {
    isShowBackCard: false
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

export type CardType ={
    isShowBackCard: boolean
}
