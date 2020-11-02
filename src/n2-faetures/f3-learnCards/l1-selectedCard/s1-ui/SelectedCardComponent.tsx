import React from "react"
import stales from './SelectedCardComponent.module.css'
import {FrontPartCard} from './FrontPartCard/FrontPartCard';
import {BackPartCard} from './BackPartCard/BackPartCard';

export const SelectedCardComponent = () => {
    return (
        <div className={stales.cardBody}>
            <div>
                <FrontPartCard/>
            </div>
            <div>
                <BackPartCard/>
            </div>
        </div>
    )
}
