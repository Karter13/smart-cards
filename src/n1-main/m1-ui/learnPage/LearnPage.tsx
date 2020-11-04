import React from 'react'
import stales from './LearnPage.module.css'
import  {SelectedCardContainer}  from '../../../n2-faetures/f3-learnCards/l1-selectedCard/s1-ui/SelectedCardContainer'

export const LearnPage = React.memo(() => {

    return (
        <div className={stales.cardBody}>
            LearnPage
            <SelectedCardContainer/>
        </div>
    )
});
