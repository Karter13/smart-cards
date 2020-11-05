import axios from 'axios';
import {BACK_URL} from '../../../../n0-config/config';

const instanse = axios.create({
    baseURL: BACK_URL,
    withCredentials: true
});

export const cardAPI = {
    sendCardGrade(grade: number, card_id: string) {
        return instanse.put<CardGradeType>('cards/grade', {grade, card_id})
            .then(res => res.data.updatedGrade)
    }
};

type CardGradeType = {
    updatedGrade: {
        card_id: string
        cardsPack_id: string
        created: string
        grade: number
        more_id: string
        shots: number
        updated: string
        user_id: string
        __v: number
        _id: string
    }
}
