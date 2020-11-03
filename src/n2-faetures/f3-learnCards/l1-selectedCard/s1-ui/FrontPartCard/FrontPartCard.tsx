import React from 'react'
import { Button } from '../../../../../n1-main/m1-ui/common/Button/Button';
import styles from './FrontPartCard.module.css'

type FrontPartCardPropsType = {
    onCheck: () => void
}

export const FrontPartCard: React.FC<FrontPartCardPropsType> = React.memo(({onCheck}) => {

    return (
        <div className={styles.frontCardBody}>
            <h3>Question</h3>
            <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam asperiores aut blanditiis
                    cumque
                    deserunt dolorum fugit odit rem, repellendus veniam. Ab aut commodi eius facilis, ipsam labore
                    maxime nobis perspiciatis quaerat quia quidem sapiente sed sit? Distinctio itaque pariatur
                    porro!</p>
            </div>
            <Button value={'проверить'} click={onCheck}/>
        </div>
    )
});
