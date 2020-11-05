import React from 'react'
import {Button} from '../../../../../n1-main/m1-ui/common/Button/Button';
import {CardType} from '../../s2-bll/selectCard-reducer';
import {ButtonString} from '../../../../../n1-main/m1-ui/common/Button/ButtonString';


type BackPartCardPropsType = {
    onNext: () => void
    card: CardType
    click: (value: number) => void
}
export type gradesType = {
    value: number
    title: string
}
const grades: Array<gradesType> = [
    {value: 1, title: 'не знал'},
    {value: 2, title: 'забыл'},
    {value: 3, title: 'долго думал'},
    {value: 4, title: 'перепутал'},
    {value: 5, title: 'знал'}
];

export const BackPartCard: React.FC<BackPartCardPropsType> = React.memo(({onNext, card, click}) => {
    return (
        <div>
            <h3>Answer</h3>
            <div>
                <p>{card.answer}</p>
            </div>
            <div>
                {
                    grades.map((value, index) => (<Button key={'value-' + index} value={value} click={click}/>))}
            </div>
            <ButtonString value={'следующая карта'} click={onNext}/>
        </div>
    )
});
