import React from 'react'
import styles from './FrontPartCard.module.css'
import {CardType} from '../../s2-bll/selectCard-reducer';
import {ButtonString} from '../../../../../n1-main/m1-ui/common/Button/ButtonString';

type FrontPartCardPropsType = {
    onCheck: () => void
    card: CardType
}

export const FrontPartCard: React.FC<FrontPartCardPropsType> = React.memo(({onCheck, card}) => {

    return (
        <div className={styles.frontCardBody}>
            <h3>Question</h3>
            <div>
                <p>{card.question}</p>
            </div>
            <ButtonString value={'проверить'} click={onCheck}/>
        </div>
    )
});
