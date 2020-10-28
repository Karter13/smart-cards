import React, {useEffect} from 'react';
import MaterialTable from 'material-table';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from 'react-router-dom';

import styles from './Cards.module.css';

import {AppRootStateType} from "../../../../n1-main/m2-bll/store";
import {addCardTC, CardType, setCardsPackIdTC, setCardsTC, updateCardTC} from "../c2-bll/cards-reduser";

type DisplayCardType = {
    _id: string;
    question: string;
    answer: string;
    grade: number;
    updated: string;
    url: string;
}

export const CardsTable = () => {
    const {buttonContainer} = styles;

    const cards = useSelector<AppRootStateType, Array<CardType> | null>(state => state.cards.cards);
    const cardsPack_id = useSelector<AppRootStateType, string>(state => state.cards.cardsPack_id);
    const dispatch = useDispatch();

    // const {cardsPackIdParams} = useParams();
    const cardsPackIdParams = '5f952ae3d231ec20d83d9ccb';
    dispatch(setCardsPackIdTC(cardsPackIdParams));

    useEffect(() => {
        dispatch(setCardsTC(cardsPack_id, undefined,
            undefined, undefined, undefined, undefined, undefined, undefined, 20));
    }, [dispatch]);

    const onCardUpdate = (card: DisplayCardType | Array<DisplayCardType>): void => {
        !Array.isArray(card) && dispatch(updateCardTC(card._id, `updated ${card.question}`, `updated ${card.answer}`, card.grade))
    }

    const onCardDelete = (card: DisplayCardType | Array<DisplayCardType>): void => {
        !Array.isArray(card) && dispatch(updateCardTC(card._id))
    }

    const onCardAdd = (cardsPack_id: string, question?: string, answer?: string, grade?: number,
                       shots?: number, rating?: number, answerImg?: string, questionImg?: string,
                       questionVideo?: string, answerVideo?: string, type?: string) => {
        dispatch(addCardTC(cardsPack_id, question, answer, grade, shots, rating, answerImg, questionImg,
            questionVideo, answerVideo, type))
    }

    // @ts-ignore
    const cardsForDisplay: Array<DisplayCardType> = cards.map(({_id, question, answer, grade, updated}) => ({
        _id, question,
        answer, grade, updated, url: '',
    }));

    return (
        <>
            <div className={buttonContainer}>
                <button type={'button'} onClick={() => onCardAdd(cardsPack_id)}> add card</button>
            </div>

            <MaterialTable
                title="Cards"
                columns={[
                    {title: 'id', field: "id", type: "string"},
                    {title: 'Question', field: 'question', type: "string"},
                    {title: 'Answer', field: 'answer'},
                    {title: 'Grade', field: 'grade', type: "numeric"},
                    {title: 'Updated', field: 'updated', type: 'numeric'},
                    {title: 'Url', field: 'url', type: 'numeric'},
                ]}
                data={cardsForDisplay}
                actions={[
                    {
                        icon: 'delete',
                        tooltip: 'Delete packs',
                        onClick: (event, data: DisplayCardType | Array<DisplayCardType>) => onCardDelete(data)
                    },
                    {
                        icon: 'update',
                        tooltip: 'Update packs',
                        onClick: (event, data: DisplayCardType | Array<DisplayCardType>) => onCardUpdate(data)
                    },

                ]}
                options={{
                    headerStyle: {
                        backgroundColor: '#01579b',
                        color: '#FFF',
                        width: '90%'
                    },
                    actionsColumnIndex: -1
                }}
            />
        </>
    )
}
