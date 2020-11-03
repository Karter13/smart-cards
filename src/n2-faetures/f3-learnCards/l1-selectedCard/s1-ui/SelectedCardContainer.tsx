import React, {useCallback, useState} from 'react'
import stales from './SelectedCardContainer.module.css'
import {FrontPartCard} from './FrontPartCard/FrontPartCard';
import {BackPartCard} from './BackPartCard/BackPartCard';


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
}
const getCard = (cards: CardType[]) => {
    const sum = cards.reduce((acc, card) => acc + (6 - card.grade) * (6 - card.grade), 0);
    const rand = Math.random() * sum;
    const res = cards.reduce((acc: { sum: number, id: number }, card, i) => {
            const newSum = acc.sum + (6 - card.grade) * (6 - card.grade);
            return {sum: newSum, id: newSum < rand ? i : acc.id}
        }
        , {sum: 0, id: -1});
    console.log('test: ', sum, rand, res);

    return cards[res.id + 1];
};

export const SelectedCardContainer = React.memo(() => {

    let [isChecked, setIsChecked] = useState(false);

    const onCheck = useCallback(() => {
        setIsChecked(true)
    }, []);
    const onNext = useCallback(() => {
        setIsChecked(false)
    }, []);

    return (
        <div className={stales.cardBody}>

            <div>
                <FrontPartCard onCheck={onCheck}/>
            </div>

            {isChecked &&
            <div>
                <BackPartCard onNext={onNext}/>
            </div>
            }

        </div>
    )
});
