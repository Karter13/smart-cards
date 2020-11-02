import React from 'react'
import stales from './LearnPage.module.css'
import {SelectedCardComponent} from '../../../n2-faetures/f3-learnCards/l1-selectedCard/s1-ui/SelectedCardComponent';

export const LearnPage = () => {
    return (
        <div className={stales.cardBody}>
            LearnPage
            <SelectedCardComponent/>
        </div>
    )
}
