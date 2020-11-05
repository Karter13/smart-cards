import React from 'react'
import style from './Button.module.css'

export type ButtonPropsType = {
    click: () => void
    value: string
    red?: string
}


export const ButtonString: React.FC<ButtonPropsType> = React.memo(({red, value, click}) => {
    return (
        <>
            <button className={red === 'delete' ? `${style.button} ${style.type}` : style.button}
                    onClick={click}
                    disabled={false}
            >{value}</button>
        </>
    )
});
