import React from 'react';
import style from './Button.module.css'

export type ButtonPropsType = {
    click: () => void
    value: string
    red?: string
}

export const Button: React.FC<ButtonPropsType> = React.memo((props) => {
    return (
        <>
            <button className={props.red === 'delete' ? `${style.button} ${style.type}` : style.button} onClick={props.click}>{props.value}</button>
        </>
    )
});
