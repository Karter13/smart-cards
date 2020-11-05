import React from 'react';
import style from './Button.module.css'
import {gradesType} from '../../../../n2-faetures/f3-learnCards/l1-selectedCard/s1-ui/BackPartCard/BackPartCard';

export type ButtonPropsType = {
    click: (value: number) => void
    value: gradesType
    red?: string
}


export const Button: React.FC<ButtonPropsType> = React.memo(({red, value, click}) => {
    return (
        <>
            <button className={red === 'delete' ? `${style.button} ${style.type}` : style.button}
                    onClick={() => click(value.value) }
                    disabled ={false}
            >{value.title}</button>
        </>
    )
});
