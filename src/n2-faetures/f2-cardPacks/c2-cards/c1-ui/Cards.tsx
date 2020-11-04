import React, {useEffect, useState} from 'react';
import MaterialTable from 'material-table';
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from 'react-router-dom';

import styles from './Cards.module.css';

import {AppRootStateType} from "../../../../n1-main/m2-bll/store";
import {
    addCardTC,
    CardType, CurrentCardValuesType,
    deleteCardTC,
    setCardsPackIdTC,
    setCardsTC, setCurrentCardValuesTC,
    toggleModalTC,
    updateCardTC
} from "../c2-bll/cards-reduser";
import {CustomModal} from "../../../../n1-main/m1-ui/common/Modal/CustomModal";

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

    const cards = useSelector<AppRootStateType, Array<CardType>>(state => state.cards.cards);
    const cardsPack_id = useSelector<AppRootStateType, string>(state => state.cards.cardsPack_id);
    const currentModal = useSelector<AppRootStateType>(state => state.cards.currentModal);
    const currentCardValues = useSelector<AppRootStateType, CurrentCardValuesType>(state => state.cards.currentCardValues);
    const dispatch = useDispatch();

    const {location} = useHistory();
    const cardsPackIdParams = location.pathname.substring(7);

    dispatch(setCardsPackIdTC(cardsPackIdParams));

    const onCardAdd = (cardsPack_id: string, question?: string, answer?: string, grade?: number,
                       shots?: number, rating?: number, answerImg?: string, questionImg?: string,
                       questionVideo?: string, answerVideo?: string, type?: string) => {
        dispatch(addCardTC(cardsPack_id, question, answer, grade, shots, rating, answerImg, questionImg,
            questionVideo, answerVideo, type));
        dispatch(toggleModalTC(''));
    }

    const onAddCardHandler = () => {
        dispatch(toggleModalTC('add'));
    }

    const onUpdateCardHandler = (card: DisplayCardType | Array<DisplayCardType>) => {
        if (!Array.isArray(card)) {
            dispatch(toggleModalTC('update'));
            dispatch(setCurrentCardValuesTC({
                id: card._id,
                question: card.question,
                answer: card.answer,
            }));
        }
    }
    useEffect(() => {
        if (cardsPackIdParams) {
            dispatch(setCardsTC(cardsPackIdParams, undefined,
                undefined, undefined, undefined, undefined, undefined, undefined, 20))
        }
    }, [dispatch]);


    const onCardUpdate = (cardId: string, question: string, answer: string, grade?: number): void => {
        dispatch(updateCardTC(cardId, question, answer, grade));
        dispatch(toggleModalTC(''));
    }

    const onCardDelete = (card: DisplayCardType | Array<DisplayCardType>): void => {
        !Array.isArray(card) && dispatch(deleteCardTC(card._id))
    }


    const cardsForDisplay: Array<DisplayCardType> = cards.map(({_id, question, answer, grade, updated}) => ({
        _id, question,
        answer, grade, updated, url: '',
    }));

    let displayModal;
    switch (currentModal) {
        case 'add':
            displayModal = <CustomModal
                heading={'Add new card'}
                fields={[{title: 'Question'}, {title: 'Answer'}]}
                showModal={true}
                isEditFields={true}
                packId={cardsPack_id}
                callback={(cardPack_id, values) => onCardAdd(cardsPack_id, values.Question, values.Answer)}
            />;
            break;
        case 'delete':
            displayModal = <CustomModal
                heading={'Delete card'}
                fields={[{title: 'Are you sure?'}]}
                showModal={true}
                isEditFields={false}
            />;
            break;
        case 'error':
            displayModal = <CustomModal
                heading={'Error!'}
                fields={[{title: 'Error!'}]}
                showModal={true}
                isEditFields={false}
            />;
            break;
        case 'update':
            displayModal = <CustomModal
                heading={'Update card'}
                fields={[{title: 'Question', value: currentCardValues.question},
                    {title: 'Answer', value: currentCardValues.answer}]}
                packId={currentCardValues.id}
                showModal={true}
                isEditFields={true}
                callback={(_id, values) => onCardUpdate(_id, values.Question, values.Answer)}
            />;
            break;
        default:
            displayModal = '';
    }

    return (
        <>
            {
                displayModal
            }
            <MaterialTable
                title="Cards"
                columns={[
                    {title: 'Question', field: 'question', type: "string"},
                    {title: 'Answer', field: 'answer'},
                    {title: 'Grade', field: 'grade', type: "numeric"},
                    {title: 'Updated', field: 'updated', type: 'numeric'},
                    {title: 'Url', field: 'url', type: 'numeric'},
                ]}
                data={cardsForDisplay}
                actions={[
                    {
                        icon: 'add',
                        tooltip: 'Add Card',
                        isFreeAction: true,
                        onClick: (event) => onAddCardHandler()
                    },
                    {
                        icon: 'delete',
                        tooltip: 'Delete packs',
                        onClick: (event, data: DisplayCardType | Array<DisplayCardType>) => onCardDelete(data)
                    },
                    {
                        icon: 'update',
                        tooltip: 'Update packs',
                        // onClick: (event, data: DisplayCardType | Array<DisplayCardType>) => onCardUpdate(data)
                        onClick: (event, data: DisplayCardType | Array<DisplayCardType>) => onUpdateCardHandler(data),
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
