import React, {useCallback, useEffect, useState} from 'react'
import stales from './SelectedCardContainer.module.css'
import {FrontPartCard} from './FrontPartCard/FrontPartCard';
import {BackPartCard} from './BackPartCard/BackPartCard';
import {useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../../../n1-main/m2-bll/store';
import { setCardsTC} from '../../../f2-cardPacks/c2-cards/c2-bll/cards-reduser';
import {addNewCard, CardType} from '../s2-bll/selectCard-reducer';

const getCard = (cards: CardType[]) => {
    const sum = cards.reduce((acc, card) => acc + (6 - card.grade) * (6 - card.grade), 0);
    const rand = Math.random() * sum;
    const res = cards.reduce((acc: { sum: number, id: number }, card, i) => {
            const newSum = acc.sum + (6 - card.grade) * (6 - card.grade);
            return {sum: newSum, id: newSum < rand ? i : acc.id}
        }
        , {sum: 0, id: -1});

    return cards[res.id + 1];
};

type SelectedCardContainerPropsType = {}
export const SelectedCardContainer: React.FC<SelectedCardContainerPropsType> = React.memo((props) => {

    const learnCard = useSelector<AppRootStateType, CardType >(state => state.card);
    const cards = useSelector<AppRootStateType, Array<CardType>>((store) => store.cards.cards);
    const dispatch = useDispatch();
    const {id} = useParams();

    const [isChecked, setIsChecked] = useState(false);
    const [first, setFirst] = useState(true);

    useEffect(() => {

        if (first) {
            dispatch(setCardsTC(id));
            setFirst(false)
        }

        if (cards.length > 0) {
            dispatch(addNewCard(getCard(cards)))
        }
        return () => {
            console.log('useEffect off');
        }

    }, [dispatch, id, cards, first]);


    const onCheck = useCallback(() => {
        setIsChecked(true);
    }, [isChecked]);
    const onNext = useCallback(() => {
        setIsChecked(false)
        if (cards.length > 0) {
            dispatch(addNewCard(getCard(cards)))
        }
    }, [cards, dispatch]);

    const toSendRating = (value: number) => {
        console.log(value)
        // dispatch(sendRating(value))
    };

    return (
        <div className={stales.cardBody}>

            <div>
                <FrontPartCard onCheck={onCheck} card={learnCard}/>
            </div>

            {isChecked &&
            <div>
                <BackPartCard click={toSendRating} onNext={onNext} card={learnCard}/>
            </div>
            }
        </div>
    )
});

