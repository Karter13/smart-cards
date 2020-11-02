import React from "react"
import stales from './LearnPage.module.css'
import {FrontPartCard} from '../../../n2-faetures/f3-learnCards/l1-selectedCard/s1-ui/FrontPartCard/FrontPartCard';
import {BackPartCard} from '../../../n2-faetures/f3-learnCards/l1-selectedCard/s1-ui/BackPartCard/BackPartCard';

export const LearnPage = () => {
    return (
        <div className={stales.cardBody}>
            LearnPage
            <div>
                <FrontPartCard/>
            </div>
            <div>
                <BackPartCard/>
            </div>
        </div>
    )
}
