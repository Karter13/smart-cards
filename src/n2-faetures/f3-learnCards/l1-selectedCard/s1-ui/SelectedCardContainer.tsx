import React, {useCallback, useEffect, useState} from 'react'
import stales from './SelectedCardContainer.module.css'
import {FrontPartCard} from './FrontPartCard/FrontPartCard';
import {BackPartCard} from './BackPartCard/BackPartCard';
import {useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../../../n1-main/m2-bll/store';
import {CardType, setCardsTC} from '../../../f2-cardPacks/c2-cards/c2-bll/cards-reduser';
// import {CardType} from '../s2-bll/selectCard-reducer';

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

    const [isChecked, setIsChecked] = useState(false);
    const [first, setFirst] = useState(true);
    const [card, setCard] = useState<CardType>({
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
    });

    const cards = useSelector<AppRootStateType, Array<CardType>>((store) => store.cards.cards);
    const dispatch = useDispatch();
    const {id} = useParams();
    useEffect(() => {

        if (first) {
            dispatch(setCardsTC(id));
            setFirst(false)
        }

        if (cards.length > 0) {
            setCard(getCard(cards))
        }
        return () => {
            console.log('useEffect off');
        }

    }, [dispatch, id, cards, first]);



    const onCheck = useCallback(() => {
        setIsChecked(true);
    }, []);
    const onNext = useCallback(() => {
        setIsChecked(false)
        if (cards.length > 0) {
            setCard(getCard(cards))
        }
    }, [cards]);

    return (
        <div className={stales.cardBody}>

            <div>
                <FrontPartCard onCheck={onCheck} card={card}/>
            </div>

            {isChecked &&
            <div>
                <BackPartCard onNext={onNext} card={card}/>
            </div>
            }

        </div>
    )
});

