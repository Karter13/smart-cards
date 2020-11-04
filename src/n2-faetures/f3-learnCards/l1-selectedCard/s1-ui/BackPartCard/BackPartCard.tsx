import React from 'react'
import {Button} from '../../../../../n1-main/m1-ui/common/Button/Button';
import {CardType} from '../../s2-bll/selectCard-reducer';

const grades = ['не знал', 'забыл', 'долго думал', 'перепутал', 'знал'];
type BackPartCardPropsType = {
    onNext: () => void
    card: CardType
}

export const BackPartCard: React.FC<BackPartCardPropsType> = React.memo(({onNext, card}) => {
    return (
        <div>
            <h3>Answer</h3>
            <div>
                <p>{card.answer}</p>
            </div>
            <div>
                {grades.map((value, index) => (<Button key={'value-' + index} value={value} click={() => {
                        console.log('click')
                    }}/>
                ))}
            </div>
            <Button value={'следующая карта'} click={onNext}/>
        </div>
    )
});
