import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:7542/2.0/',
    withCredentials: true,
})

export const CardsApi = {
    getCards(cardsPack_id: string, cardAnswer?: string, cardQuestion?: string, min?: number,
             max?: number, shortCards?: string, grade?: number, page?: number, pageCount?: number) {
        return instance.get(`cards/card`, {
            params: {
                cardsPack_id,
                cardAnswer,
                cardQuestion,
                min,
                max,
                shortCards,
                grade,
                page,
                pageCount,
            }
        });
    },

    addCard(cardsPack_id: string, question?: string, answer?: string, grade?: number,
            shots?: number, rating?: number, answerImg?: string, questionImg?: string,
            questionVideo?: string, answerVideo?: string, type?: string) {
        return instance.post(`cards/card`, {
            card: {
                cardsPack_id,
                question,
                answer,
                grade,
                shots,
                rating,
                answerImg,
                questionImg,
                questionVideo,
                answerVideo,
                type,
            }
        })
    },

    deleteCard(id: string) {
        return instance.delete('cards/card', {
            params: {
                id,
            }
        });
    },

    updateCard(id: string, question?: string, answer?: string, grade?: number,
               shots?: number, rating?: number, answerImg?: string, questionImg?: string,
               questionVideo?: string, answerVideo?: string, type?: string, comments?: string) {
        return instance.put('cards/card', {
            card: {
                _id: id,
                question,
                answer,
                grade,
                shots,
                rating,
                answerImg,
                questionImg,
                questionVideo,
                answerVideo,
                type,
                comments,
            }
        })
    }
}
